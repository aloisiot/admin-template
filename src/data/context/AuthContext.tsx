import { useRouter } from "next/router";
import { createContext, useCallback, useEffect, useState } from "react";
import firebase from "../../firebase/config"
import Usuario from "../../model/Usuario";
import Cookies from 'js-cookie'

interface AuthContextProps{
    usuario: Usuario
    carregando?: boolean
    cadastrar?: (email: string, senha: string) => void
    login?: (email: string, senha: string) => void
    loginGoogle?: () => Promise<void>
    logout?: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({usuario: null})

async function usuarioNormalizado(usuarioFireBase: firebase.User): Promise<Usuario> {
    const token = await usuarioFireBase.getIdToken()
    const usuarioNormalizado = {
        uid: usuarioFireBase.uid,
        nome: usuarioFireBase.displayName,
        email: usuarioFireBase.email,
        token,
        provedor: usuarioFireBase.providerData[0].providerId,
        imagemUrl: usuarioFireBase.photoURL
    }

    return usuarioNormalizado 
}

function gerenciarCookie(logado: boolean){
    if(logado){
        Cookies.set("admin-template-auth", {logado}, {
            expires: 7
        })
    } else {
        Cookies.remove("admin-template-auth")
    }
}

export function AuthProvider(props){
    const router = useRouter()
    const[usuario, setUsuario] = useState<Usuario>(null)
    const[carregando, setCarregando] = useState<boolean>(true)

    async function configSessao(usuarioFirebase: firebase.User){
        if(usuarioFirebase?.email){
            const usuario = await usuarioNormalizado(usuarioFirebase)
            setUsuario(usuario)
            gerenciarCookie(true)
            setCarregando(false)
            return usuario.email
        } else {
            setUsuario(null)
            gerenciarCookie(false)
            setCarregando(false)
            return false
        }
    }

    const configurarSessao = useCallback(configSessao, [])

    async function loginGoogle(){
        const resp = await firebase.auth().signInWithPopup(
            new firebase.auth.GoogleAuthProvider()
        )

        await configSessao(resp.user)
        router.push("/")
    }

    async function login(email: string, senha: string){
        const resp = await firebase.auth().signInWithEmailAndPassword(email, senha)
        await configSessao(resp.user)
        router.push("/")
    }

    async function cadastrar(email: string, senha: string){
        const resp = await firebase.auth().createUserWithEmailAndPassword(email, senha)
        await configSessao(resp.user)
        router.push("/")
    }

    async function logout(){
        try{
            setCarregando(true)
            await firebase.auth().signOut()
            await configSessao(null)
        } finally {
            setCarregando(false)
        }
    }

    useEffect(() => {
        if(Cookies.get("admin-template-auth")){
            const cancelar = firebase.auth().onIdTokenChanged(configurarSessao)
            return () => cancelar()
        } else {
            setCarregando(false)
        }
    }, [configurarSessao, router])
    
    return (
        <AuthContext.Provider value={{
            usuario,
            carregando,
            cadastrar,
            login,
            loginGoogle,
            logout,
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext
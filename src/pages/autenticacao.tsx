import { useState } from "react";
import AuthImput from "../components/auth/AuthImput";
import { IconeAtencao } from "../components/icons";

export default function Autenticacao(){
    const [erro, setErro] = useState<string>(null)
    const [modo, setModo] = useState<"login" | "cadastro">("login")
    const [email, setEmail] = useState<string>("")
    const [senha, setSenha] = useState<string>("")

    function exibirErro(msg: string, tempoEmSegundos = 5){
        setErro(msg)
        setTimeout(() => setErro(null), tempoEmSegundos * 1000)
    }
    
    function submeter(){
        if(modo === "login"){
            exibirErro("Erro no login")
        } else if(modo === "cadastro"){
            exibirErro("Erro no cadastro")
        }
    }

    return(
       <div className="flex h-full items-center justify-center">
            <div className="hidden sm:block h-screen flex-grow">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                    src="https://source.unsplash.com/random"
                    alt="Imagem da tela de autenticação"
                    className="h-full w-full object-cover"/>
            </div>
            <div className={`
                flex flex-col items-stretch justify-center
                h-screen w-full max-w-2xl sm:w-1/2 p-6 
                md:p-12
            `}>
                <h1 className={`text-xl font-bold mb-5`}>
                    { modo === "login" ? "Entre com a sua conta" : "Cadastre se na plataforma"}
                </h1>
                {erro && (
                    <div className={`
                        flex gap-2 items-center
                        px-4 py-2 mb-4 rounded-lg
                        bg-red-400 text-white
                    `}>
                        {IconeAtencao} {erro}
                    </div>
                )}
                <AuthImput
                    label="Email"
                    tipo="email"
                    valor={email}
                    valorMudou={setEmail}
                    obrigatorio
                />
                <AuthImput
                    label="Senha"
                    tipo="password"
                    valor={senha}
                    valorMudou={setSenha}
                    obrigatorio
                />
                <button onClick={submeter} className={`
                    w-full bg-indigo-500 hover:bg-indigo-400
                    text-white rounded-lg px-3 py-2
                `}>
                    { modo === "login" ? "Entrar" : "Cadastrar"}
                </button>
                <hr className="my-6 border-gray-300 w-full" />
                <button className={`
                    w-full bg-red-500 hover:bg-red-400
                    text-white rounded-lg px-3 py-2
                `}>
                    Login com o Google
                </button>
                {modo === "login" ? (
                    <p className="mt-4 flex-wrap flex gap-2">
                        Novo por aqui? 
                        <a onClick={() => setModo("cadastro")} className={`
                            text-blue-500 hover:text-blue-700 font-semibold
                            cursor-pointer
                        `}>
                            Criar uma conta
                        </a>
                    </p>
                ) : (
                    <p className="mt-4 flex-wrap flex gap-2">
                        Já faz parte da nossa comunidade?
                        <a onClick={() => setModo("login")} className={`
                            text-blue-500 hover:text-blue-700 font-semibold
                            cursor-pointer
                        `}>
                            Entre com a sua conta
                        </a>
                    </p>
                )}
            </div>
       </div>
    )
}
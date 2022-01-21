import Head from "next/head"
import { useRouter } from "next/router"
import useAuth from "../../data/hook/useAuth"
import Loaging from "../template/Loaging"

interface AutenticacaoRequeridaProps{
    children: any
}

export default function AutenticacaoRequerida(props: AutenticacaoRequeridaProps){
    const {usuario, carregando} = useAuth()
    const router = useRouter()

    function renderConteudo(){
        return (
            <>
                <Head>
                    <script dangerouslySetInnerHTML={{
                        __html: `
                            if(!document.cookie.includes("admin-template-auth")){
                                window.location.href="/autenticacao"
                            }
                        `
                    }}/>
                </Head>
                {props.children}
            </>
        )
    }

    if(usuario?.email && !carregando){
        return renderConteudo()
    } else if(carregando) {
        return <Loaging/>
    } else {
        router.push("/autenticacao")
        return null
    }
}
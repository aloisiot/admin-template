import useAppData from "../../data/hook/useAppData";
import AutenticacaoRequerida from "../auth/AutenticacaoRequerida";
import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";
import MenuLateral from "./MenuLateral";

interface LayoutProps{
    titulo: string
    subtitulo: string
    children?: any
}

export default function Layout(props: LayoutProps){
    const { tema } = useAppData()

    return (
        <AutenticacaoRequerida>
            <div className={tema}>
                <div className={`
                    flex h-screen w-screen
                    dark:bg-gray-900
                `}>
                    <MenuLateral/>
                    <div className={`flex flex-col w-full p-7 
                        bg-gray-200
                        dark:bg-gray-800
                        dark:text-gray-100
                        rounded-tl-xl rounded-bl-xl
                    `}>
                        <Cabecalho 
                            titulo={props.titulo}    
                            subtitulo={props.subtitulo}    
                        />
                        <Conteudo>
                            {props.children}
                        </Conteudo>
                    </div>
                </div>
            </div>
        </AutenticacaoRequerida>
    )
}
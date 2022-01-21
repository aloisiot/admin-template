import useAppData from "../../data/hook/useAppData";
import AvatarUsuario from "./AvatarUsuario";
import BotaoAlternarTema from "./BotaoAlternarTema";
import Titulo from "./Titulo";

interface CabecalhoProps{
    titulo: string
    subtitulo: string
}

export default function Cabecalho(props: CabecalhoProps){
    const {tema, alternarTema} = useAppData()

    return (
        <div className={`flex gap-3`}>
            <Titulo titulo={props.titulo} subtitulo={props.subtitulo}/>
            <div className={`flex flex-grow items-center justify-end gap-3`}>
                <BotaoAlternarTema tema={tema} alternarTema={alternarTema}/>
                <AvatarUsuario/>
            </div>
        </div>
    )   
}
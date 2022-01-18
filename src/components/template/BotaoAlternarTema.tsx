import { IconeLua, IconeSol } from "../icons";

interface AlternarTema{
    tema: string
    alternarTema: () => void
}

export default function BotaoAlternarTema(props: AlternarTema){
    return (
        <button onClick={props.alternarTema} className="w-12">
            {props.tema === 'dark' ? (
                <div className={`
                    hidden sm:block relative cursor-pointer 
                    bg-gradient-to-r from-yellow-300 to-yellow-600
                    w-full h-7 p-1 rounded-full text-white
                `}>
                    <div className={`
                        absolute left-1
                        flex items-center justify-center
                        bg-white text-yellow-600
                        h-5 w-5 rounded-full
                    `}>
                        {IconeSol}
                    </div>
                </div>
            ) : (
                <div className={`
                    hidden sm:block relative cursor-pointer
                    bg-gradient-to-r from-blue-700 to-slate-800
                    w-full h-7 p-1 rounded-full text-blue-900
                `}>
                    <div className={`
                        absolute right-1
                        flex items-center justify-center
                        bg-white
                        h-5 w-5 rounded-full
                    `}>
                        {IconeLua}
                    </div>
                </div>
            )}
        </button>
    )
}
import { IconeAjustes, IconeCino, IconeHome, IconeLogOut } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function MenuLateral(){
    return (
        <aside className={`
            flex flex-col
            dark:bg-gray-900
            dark:text-gray-100
        `}>
            <div className={`
                flex items-center justify-center
                h-20 w-full
            `}>
                <Logo/>
            </div>
            <ul className="grow">
                <MenuItem texto="Inicio" url="/" icone={IconeHome}/>
                <MenuItem texto="Ajustes" url="/ajustes" icone={IconeAjustes}/>
                <MenuItem texto="Notificações" url="/notificacoes" icone={IconeCino}/>
            </ul>
            <ul>
                <MenuItem onClick={() => console.log("logout")}
                    texto="Sair"
                    icone={IconeLogOut}
                    className={`
                        text-red-600 
                        hover:bg-red-400 
                        dark:hover:bg-red-600
                        hover:text-white
                    `}
                />
            </ul>
        </aside>
    )
}
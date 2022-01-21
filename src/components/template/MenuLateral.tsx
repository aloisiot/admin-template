import useAuth from "../../data/hook/useAuth";
import { IconeAjustes, IconeCino, IconeHome, IconeLogOut } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function MenuLateral(){
    const { logout } = useAuth()

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
                <MenuItem onClick={logout}
                    url="/autenticacao"
                    texto="Sair"
                    icone={IconeLogOut}
                    className={`
                        text-red-600
                        dark:hover:bg-red-600
                        hover:bg-red-600
                        hover:text-white
                    `}
                />
            </ul>
        </aside>
    )
}
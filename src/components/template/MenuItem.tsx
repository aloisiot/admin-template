import Link from "next/link";

interface MenuItemProps{
    className?: string
    url?: string
    texto: string
    icone: any
    onClick?: (event: any) => any
}

export default function MenuItem(props: MenuItemProps){

    function renderConteudo(){
        return (
            <a className={`
                flex flex-col items-center justify-center
                w-full h-20
            `}>
                <div>
                    {props.icone}
                </div>
                <span className={`text-xs font-light`}>
                    {props.texto}
                </span>
            </a>
        )
    }

    return (
        <li onClick={props.onClick} className={`
            px-1
            hover:bg-gray-200
            dark:hover:bg-gray-800
            cursor-pointer
            ${props.className}
        `}>
            {props.url ?(
                <Link href={props.url}>
                    {renderConteudo()}
                </Link>
            ): (
                renderConteudo()
            )}
        </li>
    )
}
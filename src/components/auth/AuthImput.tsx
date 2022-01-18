interface AuthImputProps{
    label: string
    valor: any
    obrigatorio?: boolean
    tipo?: "email" | "text" | "password"
    valorMudou?: (novoValor: any) => void
}

export default function AuthImput(props: AuthImputProps){
    return (
        <div className={`flex flex-col`}>
            <label>
                {props.label}
            </label>
            <input
                required={props.obrigatorio}
                type={props.tipo  || "text"}
                value={props.valor}
                onChange={e => props.valorMudou?.(e.target.value)}
                className={`
                    border focus:border-blue-200
                    outline-none
                    mb-4 rounded-md
                    px-3 py-3 mt-1
                    bg-gray-100 focus:bg-opacity-0
                    focus-shadow
                `}
            ></input>
        </div>
    )
}
import { createContext, useEffect, useState } from "react";

type Tema = "" | "dark"

interface AppContextProps{
    tema: string
    alternarTema?: () => void
}

const AppContext = createContext<AppContextProps>({
    tema: "",
})

export function AppProvider(props){
    const [tema, setTema] = useState<Tema>("")

    function alternarTema(){
        const novoTema: Tema =  tema === "" ? "dark" : ""
        localStorage.setItem("tema", novoTema)
        setTema(novoTema)
    }

    useEffect(() => {
        const temaSalvo = localStorage.getItem("tema")
        if(temaSalvo === "dark" || temaSalvo === ""){
            setTema(temaSalvo)
        }
    }, [])

    return (
        <AppContext.Provider value={{
            tema,
            alternarTema
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext
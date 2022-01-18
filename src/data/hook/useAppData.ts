import { useContext } from "react";
import AppContext from "../context/AppContext";

export default function useAppData(){
    return useContext(AppContext)
}
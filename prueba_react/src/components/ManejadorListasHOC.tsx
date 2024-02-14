import { useState,useEffect } from "react"
import {nodo} from "@/mocks/types"
interface ManejadorListasHOCProps {
    Component:any
    listaParam:number[],
    handleSelection:(numero:number,action:"remove"|"add")=> void
}
//const ManejadorListasHOC = () => {
    const ManejadorListasHOC = ({Component,listaParam,handleSelection}:ManejadorListasHOCProps) => {
        const [lista,setLista] = useState<nodo[]>([])
        useEffect(()=> {
            setLista(()=>{
                const newList = listaParam.sort((a,b) => a-b).map((o) => {return {numero:o,seleccionado:false}})
                return newList
            })
        },[listaParam])
        return <Component lista ={lista} handleSelection={handleSelection}></Component>
    }
    
//}

export default ManejadorListasHOC
import { useState } from "react"
import { lista } from "../mocks/lista"
import Lista from "./Lista"
import ListaSelected from "./ListaSelected"
import Buttons from "./Buttons"
import ManejadorListasHOC from "./ManejadorListasHOC"
const ListMover = ()=> {
    const [listaA,setListaA] = useState(lista)
    const [listaB,setListaB] = useState([])
    let listaSelectedA:number[] = []
    const saveSelection = (numero:number,action:"remove"|"add")=>{
        console.log(action,numero)
        if(action == "add")
            listaSelectedA.push(numero)
        else
            listaSelectedA = listaSelectedA.filter((o) => o!= numero)
        console.log(listaSelectedA)
    }
    const listMove = () =>{ 
        listaSelectedA.forEach((n) => {
            setListaA((prev) => {
                return prev.filter((o) => o != n)
            })
            setListaB((prev) => {
                return [...prev,n]
            })
        })
        listaSelectedA = []
        
    }
    return <>
        <ManejadorListasHOC Component={Lista} listaParam={listaA} handleSelection={saveSelection}></ManejadorListasHOC>
        <Buttons handler={listMove}></Buttons>
        <ManejadorListasHOC Component={ListaSelected} listaParam={listaB} handleSelection={saveSelection}></ManejadorListasHOC>
    </>
}

export default ListMover
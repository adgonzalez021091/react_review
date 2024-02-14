
import {nodo} from "@/mocks/types"
type action = "remove"|"add"
interface ListaProps {
    lista:nodo[]
    handleSelection:(numero:number,action:action)=>void
}
const Lista = ({lista,handleSelection}:ListaProps) => {
    const handleCheck = (e:React.ChangeEvent<HTMLInputElement>,num:number) => {

        handleSelection(num,(e.target.checked)?"add":"remove")        
    }
    return <>
    {
        lista.map((o,k) => {
            return <div key={k}><input type="checkbox" value={o.seleccionado} onChange={(e) => handleCheck(e,o.numero)}></input>{o.numero}</div>
        })
    }</>
}
export default Lista;
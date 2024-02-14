
import {nodo} from "@/mocks/types"
interface ListaProps {
    lista:nodo[]
    handleSelection:(numero:number)=>void
}
const Lista = ({lista}:ListaProps) => {
    return <>
    {
        lista.map((o,k) => {
            return <div key={k}>{o.numero}</div>
        })
    }</>
}
export default Lista;
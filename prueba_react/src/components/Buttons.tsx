interface ButtonsProps {
    handler:() => void
}
const Buttons = ({handler}:ButtonsProps) => {
    return <>
        <button onClick={handler}>Mover</button>
        
    </>

}
export default Buttons
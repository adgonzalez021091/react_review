import {useState} from 'react'

function AddMultiButton() {
    const [listButtons,setListButtons] = useState<number[]>([])
    function handleClick (){
        setListButtons((prev) => {
            return [...prev,prev.length]
        })
    }
  return (
    <div className='flex gap-5'>
        <button className='p-5 bg-slate-300 rounded-sm' onClick={handleClick}>Add</button>
        {listButtons.map((button,index) => {
            return <button key={index} onClick={handleClick} className='p-5 bg-slate-300 rounded-sm'>{button}</button>
        })}
      
    </div>
  )
}
export default AddMultiButton
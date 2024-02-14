import {fetchCities} from "../api/weatherAPI"
import {useQuery} from "react-query"
import {useState,useEffect} from "react" 
interface CitiesListProps {
    dataHandler:(lat:number,lon:number,name:String)=>void
}
const CitiesList = ({dataHandler}:CitiesListProps) => {
    const [citySearch,setCitySearch] = useState("")
    const {data,status,error} = useQuery(["cities",citySearch],() => fetchCities(citySearch))
    useEffect(() => {
        console.log("....",data)
    }, [data])
    
    return <>
        <input type="text" onChange={(e)=>{(e.target.value.length > 3)?setCitySearch(e.target.value):null}}></input>
    </>

}
export default CitiesList
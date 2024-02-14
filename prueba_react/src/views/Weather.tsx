import {useQuery} from "react-query" 
import {useEffect,useState} from "react"
import {fetchWeather} from "../api/weatherAPI"
import CitiesList from "../components/CitiesList"
interface currentWeather {
    currentTemperature:String
    weatherDescription:String
    location:String
}
const Weather = () => {
    let lat:number = 5,lng:number = 5;
    const {data,status,error} = useQuery(["weatherData",lat,lng],() => fetchWeather(lat,lng))
    const [currentData,setCurrentData] = useState<currentWeather>()
    const CityHandler = (lat:number,lng:number,name:String)=> {

    }
    useEffect(() =>{
        let currentD = {currentTemperature:"",
            weatherDescription:"",
            location:""}
            
        if(data){
            

            
            data.hours.forEach((o:any) => {
                const time = new Date(o.time.split("+")[0]).getHours();
                const currTime = new Date().getHours();
                console.log(time,currTime)
                if(time == currTime){
                    console.log(time,currTime,o)
                    currentD.currentTemperature = o.airTemperature.dwd;
                    return
                }
                
                
            })
        }
        setCurrentData(currentD)
    },[data])
    return <>
    <h1>Weather app test</h1>
    <h4>Select your city</h4>
    <CitiesList dataHandler={CityHandler}></CitiesList>
    {status == "success" && <div>data ok {currentData?.currentTemperature}</div>}
    {status == "loading" && <div>Cargando...</div>}
    {error && <div>{error.message}</div>}
    </>
}
export default Weather
import {weatherMock,errorgen} from "./weatcherMocks"
const fetchWeather = async (lat:number,lng:number) => {
    
    const params = 'waveHeight,airTemperature';
    
    const res = await fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
    headers: {'Authorization': '8908d82e-c69c-11ee-a941-0242ac130002-8908d8a6-c69c-11ee-a941-0242ac130002'}})
    const salida = res.json()
    if(salida.status != 200){
        throw new errorgen()
    }
    return res
} 
const fetchCities = async (city:String) => {
    if(city.length > 3){
        let salida = {"lat":0,"lng":0,"name":""}
    await fetch(`https://api.api-ninjas.com/v1/city?name=${city}`, {
        headers: {'X-Api-Key': 'Tgd4t+kfN31d8Fbg3X15pQ==fzIiWkz0ybkkDbY4'}})
        .then((res) => res.json()
        )
        .then((data) => {
            console.log(data)
        })
        .catch((error) =>{
            throw new errorgen()
        })
    
    console.log("cities...",salida)
    return salida
}else{
    console.log("error por aca")
    throw new errorgen()
}
}
export {fetchWeather,fetchCities}
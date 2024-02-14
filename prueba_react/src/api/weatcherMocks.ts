const weatherMock = {
    "hours":[
        {
            airTemperature:{
                dwd:5
            },
        time:"2024-02-08T10:00:00-06:00"
        }
    ]
}
interface error200T {
    message:String
}
class errorgen extends Error implements error200T{
    constructor(){
        super()
        this.message = "Error en el consumo de los datos"
    }
}
export {weatherMock, errorgen}
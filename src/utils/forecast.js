const requets =require('request')
const request = require('request')

const forecast =(latitude,longitude,callback)=>{
    const url ='http://api.weatherstack.com/current?access_key=3a1fc5ba4672b679a3a615b7b6e85e67&query='+ latitude +','+ longitude +'&units=f'

    request({url,json:true},(error,{body})=>{
        if(error){
            callback('Unable to connect weather services ',undefined)
        }else if(body.error){
            callback('Unable to find location',undefined)
        }else{
            console.log(body.current)
            callback(undefined,body.current.weather_descriptions[0]+". The wind speed is "+ body.current.wind_speed +" and the Humidity is "+body.current.humidity +" % . It is currently "+body.current.temperature+" degrees out.It feels like "+body.current.feelslike +" degress out.")
        }
    })
}

module.exports = forecast
const request = require('request')

const forcast = (latitude, longitude, callback) => {
    const url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=87167ab9ab3eaaaab31ac7993a1bde1a'
    
    request({ url, json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to location services.', undefined)
        } else if(body.cod === '400') {
            callback(body.message, undefined)
        }
        else {
            callback(undefined, 'Temperature is ' + body.main.temp  + 'K, weather condition is ' + body.weather[0].description + " and humidity is " + body.main.humidity)
        }
    })
}

module.exports = forcast
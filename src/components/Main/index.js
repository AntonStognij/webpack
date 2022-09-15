import React, {useContext,useEffect, useState} from "react";
import moment from "moment/moment";


const Main = () => {
  const [nowWeather, setWeather] = useState({})
useEffect( () => {
fetch('https://api.openweathermap.org/data/2.5/weather?lat=48.50&lon=34.60&appid=283b08861d9cdaad8cba21d4d18c1d9a&lang=ua').then(res => res.json())
.then(res => setWeather(res))
    }, [])
    const {main, weather, wind, name, dt} = nowWeather
    let temp = Math.round(main?.temp - 273)
    
    //определяем время
    let time = moment.unix(dt).format('MMMM Do YYYY, hh:mm')
    //определяем фон
    function getBg (paramWeather) {
      if (weather == "Rain") {
        return "weather rain"
      }
      if (weather == "Clouds") {
        return "weather cold"
      }
      else {
        return "weather hot"
      }

    }
    return (
        <div id="main" className={getBg(weather?.[0]?.main)}>
          <div className="blockWether">
            <div className="block-city">
              <div>
                <h2 className="city">{name}</h2>
                <p className="time">{time}</p>
              </div>
              
              <h2 ><span className="temp"> {temp} С </span></h2>
            </div>
            <h2>Atmospheric pressure: <span className="pressureNm"> {main?.pressure} hPa</span> </h2>
            <hr></hr>
            <h2>Humidity: <span className="humidity"> {main?.humidity } %</span> </h2>
            <hr></hr>
            <h2>Wind speed: <span className="speed"> {wind?.speed } meter/sec</span> </h2>
          </div>
          
            
        </div>
        
    )
}

export default Main;

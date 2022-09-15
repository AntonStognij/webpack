import React, {useEffect, useState} from "react";

import cloudTwo from "assets/cloudTwo.png"
import moment from "moment/moment";

const Main = () => {
  const [nowWeather, setWeather] = useState({})
  const [inProp, setInProp] = useState(true);
   //функции для координат
  function geo_success(position) {
    let latitude = +position.coords.latitude.toFixed(2);
    let longitude = +position.coords.longitude.toFixed(2)
    console.log(latitude, longitude)
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=283b08861d9cdaad8cba21d4d18c1d9a&lang=ua`).then(res => res.json())
    .then(res => setWeather(res))
   
  }
  
  function geo_error() {
    alert("Извините, нет доступной позиции.");
  }
  
  let geo_options = {
    enableHighAccuracy: true,
    maximumAge        : 30000,
    timeout           : 27000
  };

  useEffect( () => {
    navigator.geolocation.watchPosition(geo_success, geo_error, geo_options);
        }, [])

  console.log(nowWeather)

    const {main, weather, wind, name, dt} = nowWeather
    let temp = Math.round(main?.temp - 273)
    //определяем время
    let time = moment.unix(dt).format('MMMM Do YYYY, hh:mm')
    //определяем фон
    function getBg (paramWeather) {
      if (paramWeather == "Rain") {
        return "weather rain"
      }
      if (paramWeather == "Clouds") {
        return "weather cold"
      }
      else {
        return "weather hot"
      }

    }
    //функция создает 
   
    return dt ?(
        <div id="main" className={getBg(weather?.[0]?.main)}>
          
          <img className = "cloudTwo" src= {cloudTwo} alt="cloudTwo"/>
          <img className = "cloudTwo big-cloudTwo" src= {cloudTwo} alt="cloudTwo"/>
       
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
        
    ) : (<div id="main" className={getBg(weather?.[0]?.main)}>
    <div className="blockWether">
     <h2>Srry, no information...</h2>
    </div>
    
      
  </div>
  
)
}

export default Main;

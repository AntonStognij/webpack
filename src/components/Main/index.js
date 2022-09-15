import React, {useEffect, useState, useContext} from "react";
import { Link } from "react-router-dom";
import { ContextLatitude , ContextLongitude , ContextWether} from "store/context";
import moment from "moment/moment";
import {getBg} from "../../helpers"
import Elemet from "../Ellem"

const Main = () => {
  const {latitude, setLatitude} = useContext(ContextLatitude)
  const {longitude, setLongitude} = useContext(ContextLongitude)
  const {nowWeatherForElem, setWeatherNow} = useContext(ContextWether)
  const [nowWeather, setWeather] = useState({})

   //функции для координат
  function geo_success(position) {
    let latitude = +position.coords.latitude.toFixed(2);
    setLatitude(latitude)
    let longitude = +position.coords.longitude.toFixed(2)
    setLongitude(longitude)
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

    const {main, weather, wind, name, dt} = nowWeather
    let temp = Math.round(main?.temp - 273)
    //определяем время
    let time = moment.unix(dt).format('MMMM Do YYYY, hh:mm')
    setWeatherNow(weather)
    return dt ?(
        <div id="main" className={getBg(weather?.[0]?.main)}>
          {Elemet(weather?.[0]?.main)}      
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
          <Link className="btn" to="/next">Next days</Link> 
        </div>
        
    ) : (<div id="main" className={getBg(weather?.[0]?.main)}>
    <div className="blockWether">
     <h2>Sorry, no information...</h2>
    </div>
    
      
  </div>
  
)
}

export default Main;

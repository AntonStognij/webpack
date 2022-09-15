import React, {useEffect, useState, useContext} from "react";
import {getBg} from "../../helpers"
import { ContextLatitude , ContextLongitude, ContextWether } from "store/context";
import moment from "moment/moment";
import { Link } from "react-router-dom";

const NextDays = () => {
  const {latitude, setLatitude} = useContext(ContextLatitude)
  const {longitude, setLongitude} = useContext(ContextLongitude)
  const {nowWeatherForElem, setWeatherNow} = useContext(ContextWether)
  const [nextWeather, setNextWeather] = useState([])
  useEffect( () => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=283b08861d9cdaad8cba21d4d18c1d9a&lang=ua`).then(res => res.json())
    .then(res => setNextWeather(res.list))
        }, [])
       let test = {}
       let subArr = []
       for(let i =0; i < nextWeather.length; i++){
        let key = Object.keys(test)
       
        let time = moment.unix(nextWeather[i].dt-10800).format('GGGG-MM-DD')
        if (key.includes(time)){
          subArr.push(nextWeather[i])
          test[time] = subArr
        } else {
          subArr = []
          subArr.push(nextWeather[i])
          test[time] = subArr
        }
       }
       subArr = []
       for (var key in test) {
        subArr.push(test[key])
      }
  
    
    return (
        <div id="main" className={getBg(nowWeatherForElem?.[0]?.main)}> 
       
        <div className="block-nest-day">
        
          {subArr.map((el, i) => {
            return <div className="blockWether" key ={i}>
              <h2>{moment.unix(el[0].dt-10800).format('GGGG-MM-DD')}</h2>
            {el.map((element, i)=>{
              return <div key = {i}>
                <span>{moment.unix(element.dt-10800).format('hh:ss')} - {Math.round(element.main.feels_like - 273)} C - {element.weather[0].main}</span>
                <hr></hr>
                </div>
              
              })}
          </div>
          })}
          </div>  
          <Link className="btn" to="/">Weather now</Link>  
        </div>
        
    ) 
}

export default NextDays;

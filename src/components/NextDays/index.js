import React, {useEffect, useState, useContext} from "react";
import {getBg, newArr, getImgWether} from "../../helpers"
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
    let subArr = newArr(nextWeather) 
    return (
        <div id="main" className={getBg(nowWeatherForElem?.[0]?.main)}> 
         
       <div className="all-block">
       <Link className="btn" to="/">Weather now</Link> 
        <div className="block-filter">
        <div className="block-btn-filter"> 
        <img className = "filter img-wether" src= {getImgWether('Clear')} alt="img-wether"/>
        <img className = "filter img-wether" src= {getImgWether('Rain')} alt="img-wether"/>
        <img className = "filter img-wether" src= {getImgWether('Clouds')} alt="img-wether"/>
        </div>
        
        </div>
        <div className="block-next-day">
        
          {subArr.map((el, i) => {
            return <div className="blockWether" key ={i}>
              <h2>{moment.unix(el[0].dt-10800).format('GGGG-MM-DD')}</h2>
            {el.map((element, i)=>{
              return <div key = {i}>

                <span>{moment.unix(element.dt-10800).format('hh:ss')} - {Math.round(element.main.feels_like - 273)} C  <img className = "img-wether" src= {getImgWether(element.weather[0].main)} alt="img-wether"/> </span>
                <hr></hr>
                </div>
              
              })}
          </div>
          })}
          </div> 
          </div> 
         
        </div>
        
    ) 
}

export default NextDays;

import cloudTwo from "assets/cloudTwo.png"
import cloudRain from "assets/cloud-rain.png"
import cloudRainTwo from "assets/cloud-rain-two.png"
import rain from "assets/rain.png"
import water from "assets/water.png"
import sun from "assets/sun.png"
import sunCloud from "assets/sun-cloud.png"
import snow from "assets/snow.png"
import star from "assets/star.png"
import moment from "moment/moment";




//функция определяет фон
const getBg = (paramWeather) => {
  let time = moment().format('HH')
    if (paramWeather == "Rain" && (time > 19 || time >=0 && time < 7)) {
      return "weather rain night"
    }
    if (paramWeather == "Rain" && (time > 19 || time >=0 && time < 7)) {
      return "weather rain"
    }
    if (paramWeather == "Clouds" && (time > 19 || time >=0 && time < 7)) {
      return "weather cold night"
    }
    if (paramWeather == "Clouds" && (time > 19 || time >=0 && time < 7)) {
      return "weather cold"
    }
    else {
      if(time > 19 || time >=0 && time < 7){
        return "weather hot night"
      } else {
        return "weather hot"
      }
      
    }

  }
//функция определяет картинку
  const getImg = (paramWeather) =>{
    if (paramWeather == "Rain") {
        return { imgOne: cloudRain,
                imgTwo:cloudRainTwo,
                imgThree:water
}
    } 
    if (paramWeather == "Clouds"){
        return {
            imgOne: cloudTwo,
            imgTwo:null,
            imgThree:null
        } 
    }
    return {
        imgOne: cloudTwo,
        imgTwo:null,
        imgThree:null
    } 
  }

  const newArr = (arr)=> {
    let objArr = {}
    let subArr = []
    for(let i =0; i < arr.length; i++){
     let key = Object.keys(objArr)
    
     let time = moment.unix(arr[i].dt-10800).format('GGGG-MM-DD')
     if (key.includes(time)){
       subArr.push(arr[i])
       objArr[time] = subArr
     } else {
       subArr = []
       subArr.push(arr[i])
       objArr[time] = subArr
     }
    }
    subArr = []
    for (var key in objArr) {
     subArr.push(objArr[key])
   }
   return subArr
  }

  const getImgWether = (param) => {
    if (param == "Clouds") {
      return sunCloud
    }
    if (param == "Rain") {
      return rain
    }
    if (param == "Clear") {
      return sun
    } 
    if (param == "Star") {
      return star
    } 
    return snow
  }
 

export {getBg, getImg, newArr, getImgWether}
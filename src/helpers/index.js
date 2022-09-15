import cloudTwo from "assets/cloudTwo.png"
import cloudRain from "assets/cloud-rain.png"
import cloudRainTwo from "assets/cloud-rain-two.png"
import water from "assets/water.png"
import moment from "moment/moment";


//функция определяет фон
const getBg = (paramWeather) => {
  let time = moment().format('HH')
  console.log(time)
    if (paramWeather == "Rain" && (time > 19 || time >0 && time < 7)) {
      return "weather rain night"
    }
    if (paramWeather == "Rain" && (time > 19 || time >0 && time < 7)) {
      return "weather rain"
    }
    if (paramWeather == "Clouds" && (time > 19 || time >0 && time < 7)) {
      return "weather cold night"
    }
    if (paramWeather == "Clouds" && (time > 19 || time >0 && time < 7)) {
      return "weather cold"
    }
    else {
      if(time > 19 || time >0 && time < 7){
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
 

export {getBg, getImg}
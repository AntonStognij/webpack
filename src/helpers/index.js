import cloudTwo from "assets/cloudTwo.png"
import cloudRain from "assets/cloud-rain.png"
import cloudRainTwo from "assets/cloud-rain-two.png"
import water from "assets/water.png"




const getBg = (paramWeather) => {
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
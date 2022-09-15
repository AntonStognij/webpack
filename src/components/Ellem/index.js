import {getImg} from "../../helpers"
const Elemet = (param) => {
  const arrImg = getImg(param)
  if (param == "Rain") {
    return (
    <>
    <img className = "cloudTwo" src= {arrImg.imgOne} alt="cloudTwo"/>
    <div className="cloudTwo block-cloud">
      <img className = "big-cloudTwo" src= {arrImg.imgTwo} alt="cloudTwo"/>
      <img className = "water one" src= {arrImg.imgThree} alt="water"/>
      <img className = "water two" src= {arrImg.imgThree} alt="water"/>
      <img className = "water three" src= {arrImg.imgThree} alt="water"/>
      <img className = "water foure" src= {arrImg.imgThree} alt="water"/>
      <img className = "water five" src= {arrImg.imgThree} alt="water"/>
      <img className = "water six" src= {arrImg.imgThree} alt="water"/>
      <img className = "water seven" src= {arrImg.imgThree} alt="water"/>
    </div>
    </>
    )
  }
  if (param == "Clouds") {
    return (
      <>
      <div className="sun"></div>
      <img className = "cloudTwo" src= {arrImg.imgOne} alt="cloudTwo"/>
      <img className = "cloudTwo big-cloudTwo" src= {arrImg.imgOne} alt="cloudTwo"/>
      </>
      )
  }
  return (
    <>
    <div className="sun"></div>
    <img className = "cloudTwo big-cloudTwo" src= {arrImg.imgOne} alt="cloudTwo"/>
    </>
    )
 
}

export default Elemet;
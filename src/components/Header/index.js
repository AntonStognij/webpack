import React, {useContext,useEffect} from "react";
// import { ContextСhoice } from "store/context";
import { Link } from "react-router-dom";



const Header = () => {
    useEffect( () => {
fetch('https://api.openweathermap.org/data/2.5/weather?lat=48.50&lon=34.60&appid=283b08861d9cdaad8cba21d4d18c1d9a&lang=ua').then(res => res.json())
.then(res => console.log(res))
    }, [])
    // const {choice, setСhoice} = useContext(ContextСhoice) 48.50954122692993, 34.60716930586489
    return (
        <header>
      <h1>test</h1>
    </header>
    )
}

export default Header;

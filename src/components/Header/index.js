import React from "react";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


const Header = () => {
const dispatch = useDispatch()
const name = useSelector(state => state.name)
const changeNAme = (newName) => {
    dispatch({
        type:"ADD_NAME",
        payload : newName
    })
}
   const arrName = [{
    name:"Главная",
    url:"/"
            },
    {       
    name:"Новости",
    url:"/news" 
    },
    {       
    name:"Профиль",
    url:"/profile" 
    },
]

const click = (name) => {
    setName(name)
}
    return (
        <header className="header">
            <div className="wrap block-header">
            <div className="block-logo">
                <span className="basket">BASKET</span>
                <div className="img-logo">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M86.6 64C119 35.5 158.6 15 202.3 5.6C206 19.1 208 33.3 208 48c0 38.4-13.5 73.7-36.1 101.3L86.6 64zM64 86.6l85.2 85.2C121.7 194.5 86.4 208 48 208c-14.7 0-28.9-2-42.4-5.7C15 158.6 35.5 119 64 86.6zM256 0c64.9 0 124.2 24.2 169.4 64L256 233.4 194.6 172C222.9 138.5 240 95.3 240 48c0-16.2-2-32-5.8-47.1C241.4 .3 248.7 0 256 0zM48 240c47.3 0 90.5-17.1 124-45.4L233.4 256 64 425.4C24.2 380.2 0 320.9 0 256c0-7.3 .3-14.6 .9-21.8C16 238 31.8 240 48 240zm463.1 37.8C496 274 480.2 272 464 272c-47.3 0-90.5 17.1-124 45.4L278.6 256 448 86.6c39.8 45.1 64 104.4 64 169.4c0 7.3-.3 14.6-.9 21.8zm-4.7 31.9C497 353.4 476.5 393 448 425.4l-85.2-85.2C390.3 317.5 425.6 304 464 304c14.7 0 28.9 2 42.4 5.7zM340.1 362.7L425.4 448C393 476.5 353.4 497 309.7 506.4C306 492.9 304 478.7 304 464c0-38.4 13.5-73.7 36.1-101.3zM317.4 340C289.1 373.5 272 416.7 272 464c0 16.2 2 32 5.8 47.1c-7.2 .6-14.5 .9-21.8 .9c-64.9 0-124.2-24.2-169.4-64L256 278.6 317.4 340z"/></svg>
                </div>
            </div>
            <ul className="route">
                {arrName.map((elem, i) => (
                    <li key = {i}><Link to= {elem.url} className = {elem.name == name ? "link-active":"link" } onClick={(e) =>changeNAme(elem.name)}> {elem.name}</Link></li>

                ))}
            </ul>
            </div>
            
        </header>
    )
}

export default Header;

import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from 'components/Header';
import Main from "components/Main";
import Footer from "components/Footer";
import News from "components/News";
import Profile from "components/Profile";
import Authorization from "components/Authorization";
import Error from "components/ErrorPage";



const App = () => {
    console.log("ap")
    return (
        <>
        <Header/>
        <Routes>
            <Route path="/" element = { <Main/>}></Route>
            <Route path="/news" element = { <News/>}></Route>
            <Route path="/profile" element = { <Profile/>}></Route>
            <Route path="/authorization" element = { <Authorization/>}></Route>
            <Route path="*" element = { <Error/>}></Route>
        </Routes>
        <Footer/>
        </> 
       
       
    )
}

export default App;

import React from "react";
import Main from "components/Main";
import NextDays from "components/NextDays";
import { Routes, Route } from "react-router-dom";



const App = () => {
    
    return (
        <>
         <Routes>
            <Route path="/" element = { <Main/>}></Route>
            <Route path="/next" element = { <NextDays/>}></Route>
        </Routes>
       
        </> 
       
      
    )
}

export default App;

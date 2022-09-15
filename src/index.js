import React, { useState } from "react";
import App from "./app";
import { ContextLatitude , ContextLongitude , ContextWether} from "store/context";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import './styles/all'

const container = document.getElementById('root');
const root = createRoot(container);

function Init() {
    const [latitude, setLatitude] = useState("")
    const [longitude, setLongitude] = useState("")
    const [nowWeatherForElem, setWeatherNow] = useState("")
    return (
                // <React.StrictMode>
                    <BrowserRouter>
                        <ContextLongitude.Provider value={{longitude, setLongitude}}>  
                            <ContextLatitude.Provider value={{latitude, setLatitude}}>
                                    <ContextWether.Provider value={{nowWeatherForElem, setWeatherNow}}>
                                    <App/>
                                    </ContextWether.Provider>
                            </ContextLatitude.Provider>
                        </ContextLongitude.Provider>
                    </BrowserRouter>
                /* </React.StrictMode> */
    )
}

root.render(<Init />);

const devMode = process.env.NODE_ENV === "development"
if(devMode && module && module.hot){
    module.hot.accept()
}

import React, { useState } from "react";
import App from "./app";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import './styles/all'

const container = document.getElementById('root');
const root = createRoot(container);

function Init() {
   
    return (
                    // <React.StrictMode>
                            <BrowserRouter>
                                    <App/>
                             </BrowserRouter>
                    // {/* </React.StrictMode> */}
    )
}

root.render(<Init />);

const devMode = process.env.NODE_ENV === "development"
if(devMode && module && module.hot){
    module.hot.accept()
}

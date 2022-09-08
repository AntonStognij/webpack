import React, { useState } from "react";
import App from "./app";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import {store} from "../src/store/context"
import './styles/all'

const container = document.getElementById('root');
const root = createRoot(container);

function Init() {
   
    return (
                <React.StrictMode>
                    <Provider store = {store}>
                            <BrowserRouter>
                                    <App/>
                             </BrowserRouter>
                    </Provider>
                </React.StrictMode>
    )
}

root.render(<Init />);

const devMode = process.env.NODE_ENV === "development"
if(devMode && module && module.hot){
    module.hot.accept()
}

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store/store.js";
import { ChakraProvider } from '@chakra-ui/react'
import {HashRouter} from 'react-router-dom';
let root_html = document.getElementById('root')

ReactDOM.createRoot(root_html).render(
    <React.StrictMode>
        <ChakraProvider>
            <HashRouter>
                <Provider store={store}>
                    <App/>
                </Provider>
            </HashRouter>
        </ChakraProvider>
    </React.StrictMode>,
)

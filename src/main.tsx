import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import "@styles/index.css";
import GlobalStyles from "@styles/globals";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    <GlobalStyles />
  </React.StrictMode>,
)

import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter, Route, Switch } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import './Components/Style.css';
import First from './Components/First';
//import Language from './Components/Language';



ReactDOM.render(
      <React.StrictMode>
      <First />
      </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

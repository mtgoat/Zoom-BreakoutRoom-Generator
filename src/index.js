import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import { zbrtGenerator } from "./zbrtGenerator"
ReactDOM.render(
  <React.StrictMode>
    <zbrtGenerator />
  </React.StrictMode>,
  document.getElementById('root')
);



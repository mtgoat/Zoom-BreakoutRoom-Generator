import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import { Generator } from "./Generator"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Generator />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);



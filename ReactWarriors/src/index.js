import React from "react";
import ReactDOM from "react-dom";
import './bootstrap.min.css';

import App from "./components/App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Canvas } from "./Canvas";
import { Game } from "./snake/Game";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const snakeRoot = ReactDOM.createRoot(document.getElementById("snake-root"));
snakeRoot.render(
  <React.StrictMode>
    <Canvas />
  </React.StrictMode>
);

window.onload = () => {
  // A hack to get this to work on Safari.
  setTimeout(() => {
    new Game().start();
  }, 500);
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

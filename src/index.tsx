
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./telas/Home/home";
import Aluno from './telas/Aluno/aluno';

ReactDOM.render(
  <BrowserRouter>
    <App />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/aluno" component={Aluno} />
    </Switch>
  </BrowserRouter>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

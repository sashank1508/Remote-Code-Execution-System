import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home/Home";
import Main from "./components/Main/Main";
// import Test from "./test";
import { BrowserRouter, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    {/* <Test /> */}
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/ide/:user" exact component={Main} />
        {/* <Route path="/" component={NotFound} /> */}
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

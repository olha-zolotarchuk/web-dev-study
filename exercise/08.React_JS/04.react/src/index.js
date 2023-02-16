import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Route path="/" component={App} />
    {/* <App /> */}
  </Router>,
  document.getElementById("root")
);

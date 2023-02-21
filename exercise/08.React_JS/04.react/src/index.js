import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { StoreProvider } from "easy-peasy";
import store from "./store";

ReactDOM.render(
  <StoreProvider store={store}>
    <Router>
      <Route path="/" component={App} />
      {/* <App /> */}
    </Router>
  </StoreProvider>,
  document.getElementById("root")
);

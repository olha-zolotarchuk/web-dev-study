import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* <App />, */}
        <Route path="/*" element={<App/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

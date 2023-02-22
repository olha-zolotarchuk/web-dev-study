import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Cart from "./Cart";

function App() {
   const API_URL = "https://jsonplaceholder.typicode.com/";
  return (
    <React.Fragment>
      <div className="App">
        <Nav />
        <Cart />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;

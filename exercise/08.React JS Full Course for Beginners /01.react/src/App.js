import React, { Component } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

class App extends Component {
  render() {
    // const name = "Olha";

    return (
      <div className="App">
        <Header />
        <Content />
        <Footer />

        {/* <p className="App-intro">Hello {handleNameChange()}!</p> */}
        {/* <p> {name}</p> */}
      </div>
    );
  }
}

export default App;

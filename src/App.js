import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import News from "./mainPage/components/news";

class App extends Component {
  render() {
    return (
      <div className="App">
        <News />
      </div>
    );
  }
}

export default App;

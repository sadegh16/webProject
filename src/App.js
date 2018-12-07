import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MainPage from "./mainPage/components/mainRoot";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainPage />
      </div>
    );
  }
}

export default App;

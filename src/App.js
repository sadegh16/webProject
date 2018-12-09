import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TeamPage from "./components/teamPage/components/teamMainPage.jsx";
import MainPage from "./components/mainPage/components/mainPage.jsx";
class App extends Component {


  state = { 
    currentPage:<TeamPage/>
   }

  changePage=(pageTag)=>{
    this.setState({currentPage:pageTag})
  }
  render() {
    return (

      <div className="App">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            Sport
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExample04"
            aria-controls="navbarsExample04"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="true"
                >
                  actions
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdown04">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      {this.state.currentPage}
      </div>
    );
  }
}

export default App;

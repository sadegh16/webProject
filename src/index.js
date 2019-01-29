import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";
import "./App.css";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import * as semantic from "semantic-ui-react";
import League from "./components/league/league";
import MainNavBar from "./components/navBar.jsx";
import MainFooter from "./components/footer.jsx";

import TeamPage from "./components/teamPage/teamMainPage.jsx";
import MainPage from "./components/mainPage/mainPage.jsx";
import PlayerPage from "./components/playerPage/playerMainPage.jsx";
import SignIn from "./components/signIn/signInPage.jsx";
import MainNewPage from "./components/newPage/mainNewPage.jsx";
import GameMainPage from "./components/gamePage/gameMainPage.jsx";
import MessagePage from "./components/profileMessage/messagePage.jsx";

import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import SignUpPage from "./components/signUp/signUpPage";
const baseURL = 'localhost:8000/'



const routing = (
  <Router>
    <div>
      <Route exact path="/mainPage" component={MainPage} />
      <Route path="/signIn" component={SignIn} />
      <Route path="/teamPage/:teamName" component={TeamPage} />
      <Route path="/playerPage/:pid" component={PlayerPage} />
      <Route path="/newPage/:id" component={MainNewPage} />
      <Route path="/league" component={League} />
      <Route path="/gamePage/:team1/:team2/:date" component={GameMainPage} />
      <Route path="/messagePage" component={MessagePage} />
      <Route path="/signUp" component={SignUpPage} />
    </div>
  </Router>
);
ReactDOM.render(
  <div className="App">
    <MainNavBar /> {routing} <MainFooter />
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TeamPage from "./components/teamPage/teamMainPage.jsx";
import MainPage from "./components/mainPage/mainPage.jsx";
import PlayerPage from "./components/playerPage/playerMainPage.jsx";
import SignUp from "./components/signIn/signInPage.jsx";
import MainNewPage from "./components/newPage/mainNewPage.jsx";
import League from "./components/league/league.jsx";
import { Menu, Dropdown, Container, Button } from "semantic-ui-react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
const routing = (
  <Router>
    <div>
      <Route exact path="/mainPage" component={MainPage} />
      <Route path="/signUp" component={SignUp} />
      <Route path="/teamPage" component={TeamPage} />
      <Route path="/playerPage" component={PlayerPage} />
      <Route path="/newPage" component={MainNewPage} />
      <Route path="/league" component={League} />
    </div>
  </Router>
);
class App extends Component {
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  state = {
    currentPage: <TeamPage />,
    activeItem: "home"
  };

  changePage = pageTag => {
    this.setState({ currentPage: pageTag });
  };
  //
  render() {
    const { activeItem } = this.state;
    return (
      <div className="App">
        <Menu color="black" inverted size="large">
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="messages"
            active={activeItem === "messages"}
            onClick={this.handleItemClick}
          />

          <Menu.Menu position="right">
            <Dropdown item text="Language">
              <Dropdown.Menu>
                <Dropdown.Item>English</Dropdown.Item>
                <Dropdown.Item>Russian</Dropdown.Item>
                <Dropdown.Item>Spanish</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Item>
              <Button primary>Sign Up</Button>
            </Menu.Item>
            <Menu.Item>
              <Button primary>Sign In</Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        {this.state.currentPage}
        <footer class="footer-distributed">
          <div class="footer-left">
            <h3>
              Sharif Sport<span>logo</span>
            </h3>

            <p class="footer-links">
              <a href="#">Home</a>·<a href="#">Blog</a>lkafkaldk
              <a href="#">Pricing</a>·<a href="#">About</a>·<a href="#">Faq</a>
              alkflakmfcma<a href="#">Contact</a>
            </p>
          </div>

          <div class="footer-center">
            <div>
              <i class="fa fa-map-marker" />
              <p>
                <span>Our address is here</span> Iran Tehran
              </p>
            </div>

            <div>
              <i class="fa fa-phone" />
              <p>+1897983244</p>
            </div>

            <div>
              <i class="fa fa-envelope" />
              <p>
                <a href="mailto:sharif@web.programing">sharif@web.programing</a>
              </p>
            </div>
          </div>

          <div class="footer-right">
            <p class="footer-company-about">
              <span>About us</span>
              sport is very goood :)) do sport handsom:)))
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;

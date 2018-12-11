import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TeamPage from "./components/teamPage/teamMainPage.jsx";
import MainPage from "./components/mainPage/mainPage.jsx";
import PlayerPage from "./components/playerPage/playerMainPage.jsx";
import SignUp from "./components/signUp/signUpPage.jsx";
import MainNewPage from "./components/newPage/mainNewPage.jsx";
import { Menu, Dropdown, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

class App extends Component {
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  state = {
    currentPage: <MainNewPage />,
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
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
// import { browserHistory } from "react-router";
import { Menu, Dropdown, Container, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
class MainNavBar extends Component {
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  state = {
    activeItem: "home"
  };

  // redirect(to) {
  //   browserHistory.push({
  //     pathname: to
  //   });
  // }

  render() {
    const { activeItem } = this.state;

    return (
      <Menu color="black" inverted size="large">
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="league"
          active={activeItem === "messages"}
          onClick={this.handleItemClick}
        />

        <Menu.Menu position="right">
          <Dropdown item text="More">
            <Dropdown.Menu>
              <Dropdown.Item>Porofile</Dropdown.Item>
              <Dropdown.Item>About us</Dropdown.Item>
              <Dropdown.Item>Location</Dropdown.Item>
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
    );
  }
}

export default MainNavBar;

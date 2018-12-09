import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TeamPage from "./components/teamPage/components/teamMainPage.jsx";
import MainPage from "./components/mainPage/components/mainPage.jsx";
import {Menu,Input}  from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  state = { 
    currentPage:<TeamPage/>,
    activeItem: 'home'
   }

  changePage=(pageTag)=>{
    this.setState({currentPage:pageTag})

  }
  render() {
    const { activeItem } = this.state
    return (
      <div className="App">
      
      <Menu pointing secondary>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item
            name='messages'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='friends'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>

      {this.state.currentPage}
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import { Menu, List } from "semantic-ui-react";
export default class LeagueList extends Component {
  state = {};
  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };
  leagueHandler = (e, { name });
  sportFields = ["basketball", "football"];
  showFields = { basketball: ["1b", "2b", "3b"], football: ["1f", "2f", "3f"] };

  render() {
    const { activeItem } = this.state;
    const { showLeague } = this.state;
    return (
      <div>
        <Menu>
          {this.sportFields.map(s => (
            <Menu.Item
              name={s}
              active={activeItem === s}
              onClick={this.handleItemClick}
            />
          ))}
        </Menu>
        <List
          items={this.showFields[this.state.activeItem]}
          onClick={this.leagueHandler}
        />
      </div>
    );
  }
}

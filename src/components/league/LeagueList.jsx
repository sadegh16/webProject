import React, { Component } from "react";
import { Menu, List } from "semantic-ui-react";
export default class LeagueList extends Component {
  state = {
    notif: this.props.notif,
    sportFields: Object.keys(this.props.sports),
    sports: this.props.sports,
    activeItem: "football"
  };
  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };
  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <Menu>
          {this.state.sportFields.map(s => (
            <Menu.Item
              name={s}
              active={activeItem === s}
              onClick={this.handleItemClick}
            />
          ))}
        </Menu>
        <List>
          {Object.keys(this.state.sports[activeItem]).map(a => (
            <List.Item
              name={a}
              onClick={(e, { name }) => this.state.notif(name)}
            >
              {a}
            </List.Item>
          ))}
        </List>
      </div>
    );
  }
}

import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

export default class Status extends Component {
  state = {
    g1: this.props.g1,
    title: this.props.title,
    g2: this.props.g2
  };
  render() {
    return (
      <Menu color={"red"} inverted widths={3}>
        <Menu.Item name={this.state.g1} />
        <Menu.Item name={this.state.title} />
        <Menu.Item name={this.state.g2} />
      </Menu>
    );
  }
}

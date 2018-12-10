import React, { Component } from "react";
import { Table } from "semantic-ui-react";
class GameRow extends Component {
  state = {
    team: this.props.team,
    result: this.props.result,
    time: this.props.time,
    score: this.props.score
  };
  render() {
    return (
      <Table.Row>
        <Table.Cell>{this.state.team}</Table.Cell>
        <Table.Cell>{this.state.result}</Table.Cell>
        <Table.Cell>{this.state.time}</Table.Cell>
        <Table.Cell>{this.state.score}</Table.Cell>
      </Table.Row>
    );
  }
}

export default GameRow;

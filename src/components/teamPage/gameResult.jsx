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
      <tr>
        <td scope="row" data-label="team">
          {this.state.team}
        </td>
        <td data-label="result">{this.state.result}</td>
        <td data-label="time">{this.state.time}</td>
        <td data-label="score">{this.state.score}</td>
      </tr>
    );
  }
}

export default GameRow;

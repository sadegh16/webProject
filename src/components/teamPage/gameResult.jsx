import React, { Component } from "react";
import { Table } from "semantic-ui-react";
class GameRow extends Component {
  state = {

  };
  render() {
    return (
      <tr>
        <td scope="row" data-label="team">
          {this.props.team}
        </td>
        <td data-label="result">{this.props.result}</td>
        <td data-label="time">{this.props.time}</td>
        <td data-label="score">{this.props.score}</td>
      </tr>
    );
  }
}

export default GameRow;

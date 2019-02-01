import React, { Component } from "react";
import { Table } from "semantic-ui-react";
import { Link } from "react-router-dom";

class GameRow extends Component {
  state = {

  };
  render() {
    return (
      <tr>
        <td>

          <Link to={`/gamePage/${this.props.team}/${this.props.team1}/${this.props.time}`}>
            =></Link>
        </td>
        <td scope="row" data-label="team">
          {this.props.team}
        </td>
        <td data-label="result">{this.props.result}</td>
        <td data-label="time">{this.props.time}</td>
        <td data-label="score">{this.props.score}</td>
      </tr >
    );
  }
}

export default GameRow;

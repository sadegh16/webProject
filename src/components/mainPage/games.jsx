import React, { Component } from "react";
import GameField from "./gameField";
class Games extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1 className="navbar navbar-light bg-light">Games</h1>
        <GameField field="fooot" />
        <GameField field="bask" />
      </div>
    );
  }
}

export default Games;

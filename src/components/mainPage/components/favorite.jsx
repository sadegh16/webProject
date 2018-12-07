import React, { Component } from "react";
import "../style.css";
class Favorite extends Component {
  render() {
    return (
      <div class="favor-container">
        <img src={require("../res/a.gif")} />
        <h1 class="favor-team">{this.props.team}</h1>
        <p class="favor-subtitle">{this.props.teamNew}</p>
      </div>
    );
  }
}

export default Favorite;

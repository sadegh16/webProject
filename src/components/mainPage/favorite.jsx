import React, { Component } from "react";
import "views/style.css";
import { Link } from "react-router-dom";

class Favorite extends Component {
  render() {
    return (
      <div class="favor-container">
        <Link to="/newPage">
          <img src={require("./res/a.gif")} />
        </Link>
        <h1 class="favor-team">{this.props.team}</h1>
        <p class="favor-subtitle">{this.props.teamNew}</p>
      </div>
    );
  }
}

export default Favorite;

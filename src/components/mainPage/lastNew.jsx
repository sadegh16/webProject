import React, { Component } from "react";
import "views/style.css";
import { Link } from "react-router-dom";

class LastNew extends Component {
  render() {
    return (
      <div>
        <Link to="/newPage">
          <img src={require("./res/Untitled-2.jpg")} />
        </Link>
        <h1 class="new-title">{this.props.title}</h1>
        <p class="new-subtitle">{this.props.subtitle}</p>
      </div>
    );
  }
}

export default LastNew;

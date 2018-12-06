import React, { Component } from "react";
import "../style.css";
class LastNew extends Component {
  render() {
    return (
      <div>
        <img src={require("../res/Untitled-2.jpg")} />
        <h1 class="new-title">{this.props.title}</h1>
        <p class="new-subtitle">{this.props.subtitle}</p>
      </div>
    );
  }
}

export default LastNew;

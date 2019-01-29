import React, { Component } from "react";
import "views/style.css";
import { Link } from "react-router-dom";

class LastNew extends Component {
  render() {
    return (
      <div>
        <Link to="/newPage">
          <img width={300} height={200} src={`http://localhost:8000/${this.props.image}`} />
        </Link>

        <h1 class="new-title">{this.props.title}</h1>
        <h3 class="new-tag">{this.props.subtitle}</h3>
        <h9 class="new-tag">{this.props.releaseTime}</h9>
        <p class="new-subtitle">{this.props.content}</p>
      </div>
    );
  }
}

export default LastNew;

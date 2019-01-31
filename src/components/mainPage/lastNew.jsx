import React, { Component } from "react";
import "views/style.css";
import { Link } from "react-router-dom";

class LastNew extends Component {
  render() {
    return (
      <div>
        <Link to={`/newPage/${this.props.id}`}>
          <img width={300} height={200} src={`http://localhost:8000/${this.props.image}`} />
        </Link>

        <h3 class="new-title">{this.props.title}</h3>
        <h7 class="new-tag">tag: {this.props.subtitle}</h7>
        <br />
        <h9 class="new-tag">at: {this.props.releaseTime}</h9>
        <p class="new-subtitle">{this.props.content}</p>
      </div>
    );
  }
}

export default LastNew;

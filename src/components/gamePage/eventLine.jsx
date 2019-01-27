import React, { Component } from "react";
import "views/style.css";
class EventLine extends Component {
  state = {
  };
  render() {
    return (
      <div class="tile-outer">
        <i class="fa" id="timeLineTime">
          {this.props.time}
        </i>
        <div class="tile">
          <React.Fragment>
            <p>{this.props.text}</p>
            <div style={{ width: "1px", background: "red", margin: "2px" }} />
          </React.Fragment>
        </div>
      </div>
    );
  }
}

export default EventLine;

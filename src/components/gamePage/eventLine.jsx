import React, { Component } from "react";
import "views/style.css";
class EventLine extends Component {
  state = {
    events: this.props.events,
    time: this.props.time
  };
  render() {
    return (
      <div class="tile-outer">
        <i class="fa" id="timeLineTime">
          {this.state.time}
        </i>
        <div class="tile">
          {this.state.events.map(a => (
            <React.Fragment>
              <p>{a}</p>
              <div style={{ width: "1px", background: "red", margin: "2px" }} />
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  }
}

export default EventLine;

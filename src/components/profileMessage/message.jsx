import React, { Component } from "react";

class Message extends Component {
  state = {
    id: this.props.id,
    title: this.props.title,
    subtitle: this.props.subtitle,
    deleteFunc: this.props.deleteFunc
  };
  render() {
    return (
      <div class="alert info">
        <span
          class="closebtn"
          onClick={() => {
            this.state.deleteFunc(this.state.id);
          }}
        >
          &times;
        </span>
        <strong>{this.state.title} </strong> {this.state.subtitle}
      </div>
    );
  }
}

export default Message;

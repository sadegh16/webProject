import React, { Component } from "react";
import { Comment } from "semantic-ui-react";
import "views/style.css";

class ResComment extends Component {
  state = {
    leaf: this.props.leaf,
    // childs: this.props.childs,
    childs: [
      { name: "ali", time: "today", text: "sallllllllllam ohlekaaaaaaaaaat" }
    ]
  };
  //
  render() {
    return (
      <Comment>
        <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
        <Comment.Content>
          <Comment.Author as="a">{this.props.name}</Comment.Author>
          <Comment.Metadata>{this.props.time}</Comment.Metadata>
          <Comment.Text>{this.props.text}</Comment.Text>
          <Comment.Actions>
            <Comment.Action>Reply</Comment.Action>
          </Comment.Actions>
        </Comment.Content>
        <Comment.Group>
          {/* {this.state.leaf
            ? []
            : [
                this.state.childs.map(a => (
                  <ResComment
                    name={a.name}
                    time={a.time}
                    text={a.text}
                    leaf={true}
                  />
                ))
              ]} */}
        </Comment.Group>
      </Comment>
    );
  }
}

export default ResComment;

import React, { Component } from "react";
import "views/style.css";
import { Form, Comment, Button } from "semantic-ui-react";
import ResComment from "./resComment";
class CommentManager extends Component {
  state = {
    comments: [
      { name: "rez", time: "today", text: "sallllllam" },
      { name: "rez2", time: "today1", text: "sallllllam" }
    ]
  };
  ////
  onSubmit = (e, { value }) => {
    const comments = [...this.state.comments];
    comments.push({
      name: "sadegh",
      time: "today",
      text: value
    });
    this.setState({ comments });
  };

  render() {
    return (
      <Comment.Group size={16} co>
        {this.state.comments.map(a => (
          <ResComment name={a.name} time={a.time} text={a.text} leaf={false} />
        ))}
        <Form size={14} onSubmit={this.onSubmit}>
          <Form.TextArea />
          <Button
            content="Add Comment"
            labelPosition="left"
            icon="edit"
            primary
          />
        </Form>
      </Comment.Group>
    );
  }
}

export default CommentManager;

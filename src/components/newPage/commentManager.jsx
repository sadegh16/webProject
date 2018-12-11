import React, { Component } from "react";
import "views/style.css";
import { Form, Comment, Button } from "semantic-ui-react";
import ResComment from "./resComment";
class CommentManager extends Component {
  state = {
    comments: [
      { name: "rez", time: "today", text: "sallllllam" },
      { name: "rez2", time: "today1", text: "sallllllam" }
    ],

    textComment: ""
  };
  ////
  onSubmit = (e, { value }) => {
    const comments = [...this.state.comments];
    comments.push({
      name: "sadegh",
      time: "today",
      text: this.state.textComment
    });
    this.setState({ comments });
  };

  onchange = (e, { value }) => {
    this.state.textComment = value;
  };
  render() {
    return (
      <Comment.Group size={16}>
        {this.state.comments.map(a => (
          <ResComment name={a.name} time={a.time} text={a.text} leaf={false} />
        ))}
        <Form size={14} onSubmit={this.onSubmit}>
          <Form.TextArea
            onChange={this.onchange}
            placeholder="Enter your comment"
          />
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

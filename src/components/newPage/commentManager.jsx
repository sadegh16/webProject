import React, { Component } from "react";
import "views/style.css";
import { Form, Comment, Button } from "semantic-ui-react";
import ResComment from "./resComment";
import axios from 'axios';

class CommentManager extends Component {
  state = {
    textComment: ""
  };
  ////
  onSubmit = (e, { value }) => {
    this.props.helperFunc(this.state.textComment)
  };

  onchange = (e, { value }) => {
    this.state.textComment = value;
  };



  render() {
    return (
      <Comment.Group size={16}>
        {this.props.comments.map(a => (
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

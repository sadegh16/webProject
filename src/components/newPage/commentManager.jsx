import React, { Component } from "react";
import "views/style.css";
import { Form, Comment, Button } from "semantic-ui-react";
import ResComment from "./resComment";
import axios from 'axios';

class CommentManager extends Component {
  state = {
    textComment: "",
    login: false,
  };
  ////
  onSubmit = (e, { value }) => {
    this.props.helperFunc(this.state.textComment)
  };

  onchange = (e, { value }) => {
    this.state.textComment = value;
  };
  isLogin = () => {
    axios.get(`http://localhost:8000/isLogin`, { params: { key: localStorage.getItem('django_sport_key') } })
      .then(resp => {
        this.setState({ login: resp.data })
      })

  }

  componentDidMount = () => {
    this.isLogin()
  }
  render() {
    return (
      <Comment.Group size={16}>
        {this.props.comments.map(a => (
          <ResComment name={a.name} time={a.time} text={a.text} leaf={false} />
        ))}
        <Form size={14} onSubmit={this.onSubmit}>
          {this.state.login ? <React.Fragment> <Form.TextArea
            onChange={this.onchange}
            placeholder="Enter your comment"
          /> <Button
              content="Add Comment"
              labelPosition="left"
              icon="edit"
              primary
            />
          </React.Fragment> : <div />}


        </Form>
      </Comment.Group>
    );
  }
}

export default CommentManager;

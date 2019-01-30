import React, { Component } from "react";
import { Button, Divider, Form, Grid, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import axios from 'axios';

class SignIn extends Component {
  state = {
    userName: "",
    passWord: "",

  };



  handleUserName = (e, { value }) => {
    (this.state.userName = value)

  }
  handlePassword = (e, { value }) => {
    (this.state.passWord = value)

  }

  sendReq = () => {
    const c = {
      username: this.state.userName,
      password: this.state.passWord,

    }
    axios.post(`http://localhost:8000/rest-auth/login/`, c).then(resp => {
      localStorage.setItem('django_sport_key', resp.data.key)
      console.log(localStorage.getItem('django_sport_key'))

    })

  }
  render() {
    return (
      <Segment placeholder>
        <Grid columns={1} relaxed="very" stackable>
          <Grid.Column>
            <Form>
              <Form.Input
                icon="user"
                onChange={this.handleUserName}
                iconPosition="left"
                label="Username"
                placeholder="Username"
              />
              <Form.Input
                icon="lock"
                onChange={this.handlePassword}
                iconPosition="left"
                label="Password"
                type="password"
                placeholder="Password"
              />
              <Button content="Login" primary onClick={this.sendReq} />
            </Form>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

export default SignIn;

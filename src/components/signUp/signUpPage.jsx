import React, { Component } from "react";
import { Container, Form, Icon, Message, Button } from "semantic-ui-react";
import axios from 'axios';

class SignUpPage extends Component {
  state = {
    userName: "",
    passWord: "",
    email: ""
  };
  handleUserName = (e, { value }) => {
    (this.state.userName = value)

  }
  handlePassword = (e, { value }) => {
    (this.state.passWord = value)

  }
  handleEmail = (e, { value }) => {
    (this.state.email = value)

  }

  sendReq = () => {
    const c = {
      username: this.state.userName,
      email: this.state.email,

      password1: this.state.passWord,
      password2: this.state.passWord,


    }
    console.log(c)

    axios.post(`http://localhost:8000/rest-auth/registration/`, c).then(resp => {
      localStorage.setItem('django_sport_key', resp.data.key)
      console.log(localStorage.getItem('django_sport_key'))

    })

  }

  render() {
    return (
      <Container>
        <Message
          attached
          header="Welcome to our site!"
          content="sign-up for a new account"
        />
        <Form className="attached fluid segment">
          <Form.Group widths="equal">
            <Form.Input
              fluid
              onChange={this.handleEmail}
              label="email"
              placeholder="put ur email here"
              type="text"
            />
          </Form.Group>

          <Form.Input label="Username"
            onChange={this.handleUserName}

            placeholder="Username" type="text" />
          <Form.Input label="Password" onChange={this.handlePassword} type="password" />
          <Form.Checkbox inline label="I agree to the terms and conditions" />
          <Button color="blue" onClick={this.sendReq}>Submit</Button>
        </Form>
      </Container>
    );
  }
}

export default SignUpPage;

import React, { Component } from "react";
import { Container, Form, Icon, Message, Button } from "semantic-ui-react";

class SignUpPage extends Component {
  state = {};
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
              label="First Name"
              placeholder="First Name"
              type="text"
            />
            <Form.Input
              fluid
              label="Last Name"
              placeholder="Last Name"
              type="text"
            />
          </Form.Group>
          <Form.Input label="Username" placeholder="Username" type="text" />
          <Form.Input label="Password" type="password" />
          <Form.Checkbox inline label="I agree to the terms and conditions" />
          <Button color="blue">Submit</Button>
        </Form>
      </Container>
    );
  }
}

export default SignUpPage;

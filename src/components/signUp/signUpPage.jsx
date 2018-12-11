import React, { Component } from "react";
import { Button, Divider, Form, Grid, Segment } from "semantic-ui-react";

class SignUp extends Component {
  state = {};
  render() {
    return (
      <Segment placeholder>
        <Grid columns={1} relaxed="very" stackable>
          <Grid.Column>
            <Form>
              <Form.Input
                icon="user"
                iconPosition="left"
                label="Username"
                placeholder="Username"
              />
              <Form.Input
                icon="lock"
                iconPosition="left"
                label="Password"
                type="password"
                placeholder="Password"
              />
              <Button content="Login" primary />
            </Form>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

export default SignUp;

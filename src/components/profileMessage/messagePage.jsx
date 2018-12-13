import React, { Component } from "react";
import { Grid, Container } from "semantic-ui-react";
import Message from "./message";
import SideMessageMenu from "./sideMenu";

class MessagePage extends Component {
  state = {
    messages: [
      {
        id: 1,
        title: "u care about?!",
        subtitle: "Sarmorabi 1 esteghlal mord!!!!"
      },
      {
        id: 2,
        title: "u care about?!",
        subtitle: "Sarmorabi 2 esteghlal mord!!!!"
      },
      {
        id: 3,
        title: "u care about?!",
        subtitle: "Sarmorabi 3 esteghlal mord!!!!"
      },
      {
        id: 4,
        title: "u care about?!",
        subtitle: "Sarmorabi 4 esteghlal mord!!!!"
      }
    ]
  };
  onDelete = id => {
    const messages = this.state.messages.filter(c => c.id !== id);
    this.setState({ messages });
  };
  render() {
    return (
      <Container>
        <Grid columns={3} stackable centered>
          <Grid.Column width={4}>
            <SideMessageMenu />
          </Grid.Column>
          <Grid.Column width={4}>
            <img src={require("./mailBox.png")} />
          </Grid.Column>
          <Grid.Column width={8}>
            <p>Click on the "x" symbol to close the alert message.</p>
            {this.state.messages.map(a => (
              <Message
                key={a.id}
                id={a.id}
                title={a.title}
                subtitle={a.subtitle}
                deleteFunc={this.onDelete}
              />
            ))}
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default MessagePage;

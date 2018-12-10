import React, { Component } from "react";
import { Grid, Segment, Image } from "semantic-ui-react";

class PlayerMainPage extends Component {
  state = {};
  render() {
    return (
      <Grid stackable columns={2}>
        <Grid.Column>
          <Segment>
            <Image src={require("../teamPage/salam.jpg")} />
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default PlayerMainPage;

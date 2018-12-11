import React, { Component } from "react";
import News from "./news";
import Games from "./games";
import { Menu, Sidebar, Grid, Image, Segment } from "semantic-ui-react";

class MainPage extends Component {
  state = {};
  render() {
    //
    return (
      <div style={{ margin: "16px" }}>
        <Sidebar as={Segment.Group}>
          {
            <Sidebar
              as={Menu}
              icon="labeled"
              inverted
              vertical
              visible={true}
              width="thin"
            >
              <Menu.Item as="a">Home</Menu.Item>
              <Menu.Item as="a">Games</Menu.Item>
              <Menu.Item as="a">Channels</Menu.Item>
            </Sidebar>
          }
        </Sidebar>
        <Grid stackable columns={2}>
          <Grid.Column>
            <News />
          </Grid.Column>
          <Grid.Column>
            <Games />{" "}
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default MainPage;

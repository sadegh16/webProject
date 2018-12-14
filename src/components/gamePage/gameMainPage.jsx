import React, { Component } from "react";
import EventLine from "./eventLine";
import "views/style.css";
import RespTable from "../respTable";
import { Grid, Segment, Container } from "semantic-ui-react";
import FootBallGame from "./footballGame";
import BasketGame from "./basketGame";
import { Player } from "video-react";

class GameMainPage extends Component {
  state = {
    field: "basketball",
    events: [
      ["start Game"],
      ["Event1 happend"],
      ["Event2 happend"],
      ["Event3 happend", "Event4 happend"],
      ["Event5 happend"],
      ["Event6 happend"],
      ["Event7 happend"],
      ["Event8 happend"]
    ]
  };
  render() {
    return (
      <Container>
        <Grid stackable centered columns={2}>
          <Grid.Column width={6}>
            <Segment>
              <div class="col-sm-12 col-md-6 mx-auto">
                <h4 class="sub-title font-alt text-center">Event Timeline</h4>
                <div class="qualifications">
                  <div class="line" />
                  {this.state.events.map(a => (
                    <EventLine time="9:00" events={a} />
                  ))}
                </div>
              </div>
            </Segment>
          </Grid.Column>
          <Grid.Column width={10}>
            {this.state.field === "basketball" ? (
              <FootBallGame />
            ) : (
              <BasketGame />
            )}
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default GameMainPage;

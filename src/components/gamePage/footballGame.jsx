import React, { Component } from "react";
import Statistic from "./statistic";
import SortedTable from "../sortedTable";
import PlayerTable from "./playerTable";
import { Message, Grid, Segment } from "semantic-ui-react";
import NewsField from "../mainPage/newsField";

class FootBallGame extends Component {
  state = {
  };
  render() {
    return (
      <div>
        <Statistic info={this.props.generalInfo} />
        <Statistic info={this.props.specialInfo} />

        <PlayerTable bestPlayer={this.props.bestPlayer} playerInfo={this.props.playerInfo} />
        <Message>
          <Message.Header>REPORT</Message.Header>
          <p>{this.props.report.last_report}</p>
        </Message>
        <NewsField field="football" />

        <Segment inverted secondary>
          <Grid columns={2}>
            <Grid.Column>
              <video
                controls
                autoPlay
                src={this.props.src}
                style={{ width: "100%" }}
              />
            </Grid.Column>
            <Grid.Column>
              <video
                controls
                autoPlay
                src={this.props.src}
                style={{ width: "100%" }}
              />
            </Grid.Column>
          </Grid>
        </Segment>
      </div>
    );
  }
}
export default FootBallGame;

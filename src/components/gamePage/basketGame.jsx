import React, { Component } from "react";
import Statistic from "./statistic";
import SortedTable from "../sortedTable";
import PlayerTable from "./playerTable";
import NewsField from "../mainPage/newsField";
import { Message, Grid, Segment } from "semantic-ui-react";

class BasketBall extends Component {
  state = {};
  render() {
    return (
      <div>
        <Statistic />
        <PlayerTable />
        <Message>
          <Message.Header>REPORT</Message.Header>
          <p>We update report here to better service</p>
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
export default BasketBall;

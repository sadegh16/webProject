import React, { Component } from "react";
import Statistic from "./statistic";
import SortedTable from "../sortedTable";
import PlayerTable from "./playerTable";
import { Message, Grid, Segment } from "semantic-ui-react";
import NewsField from "../mainPage/newsField";
import LastNew from "../mainPage/lastNew.jsx";

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
        <div className="paincontainer">
          <div className="pane">
            {this.props.lastNews.map(a => (
              <Segment>
                <LastNew
                  key={a.lastCount}
                  title={a.title}
                  subtitle={a.subtitle}
                  content={a.content}
                  image={a.image}

                />
              </Segment>
            ))}
          </div>
        </div>
        <Segment inverted secondary>
          <Grid columns={2}>
            <Grid.Column>
              <video
                controls

                src={`http://localhost:8000/${this.props.media1}`}
                style={{ width: "100%" }}
              />
            </Grid.Column>
            <Grid.Column>
              <video
                controls
                autoPlay
                src={`http://localhost:8000/${this.props.media2}`}
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

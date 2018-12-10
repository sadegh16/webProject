import React, { Component } from "react";
import Member from "./member";
import { Grid, Menu, Table } from "semantic-ui-react";
import GameRow from "./gameResult";
//
class TeamPage extends Component {
  state = {
    gameResults: [
      {
        team: "T1",
        result: "1:2",
        time: "1/2/4",
        score: "4"
      },
      {
        team: "T2",
        result: "2:2",
        time: "2/2/4",
        score: "2"
      }
    ]
  };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <img src={require("./team.jpg")} style={{ width: "100%" }} />
        <br />
        <br />
        <br />
        <Grid columns={2} stackable centered>
          <Grid.Row>
            <Grid.Column width={10}>
              <div className="container">
                <div className="row">
                  <Member />
                  <Member />
                  <Member />
                  <Member />
                  <Member />
                  <Member />
                </div>
              </div>
            </Grid.Column>

            <Grid.Column width={6}>
              <Menu inverted>
                <Menu.Item header>Past Games Sort By</Menu.Item>
                <Menu.Item
                  name="win"
                  activeactive={activeItem === "closest"}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="loose"
                  activeactive={activeItem === "closest"}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="score"
                  activeactive={activeItem === "mostComments"}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="time"
                  activeactive={activeItem === "mostPopular"}
                  onClick={this.handleItemClick}
                />
              </Menu>
              <Table size="large">
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>team</Table.HeaderCell>
                    <Table.HeaderCell>result</Table.HeaderCell>
                    <Table.HeaderCell>time</Table.HeaderCell>
                    <Table.HeaderCell>score</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  {this.state.gameResults.map(a => (
                    <GameRow
                      team={a.team}
                      result={a.result}
                      time={a.time}
                      score={a.score}
                    />
                  ))}
                </Table.Body>
              </Table>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default TeamPage;

import React, { Component } from "react";
import Member from "./member";
import { Grid, Menu } from "semantic-ui-react";
import GameRow from "./gameResult";
import LastNew from "../mainPage/lastNew.jsx";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "views/style.css";
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
    ],
    lastNews: [
      { id: 1, title: "basket1", subtitle: "iran won" },
      { id: 2, title: "basket2", subtitle: "iran loose" },
      { id: 3, title: "basket3", subtitle: "iran loose" },
      { id: 4, title: "basket4", subtitle: "iran loose" }
    ],
    lastCount: 0
  };
  componentDidMount() {
    var intervalId = setInterval(() => {
      this.setState({
        lastCount: (this.state.lastCount + 1) % this.state.lastNews.length
      });
    }, 5500);

    this.setState({ intervalId: intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

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
              <table>
                <caption>Statement Summary</caption>
                <thead>
                  <tr>
                    <th scope="col">Team</th>
                    <th scope="col">Result</th>
                    <th scope="col">time</th>
                    <th scope="col">score</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.gameResults.map(a => (
                    <GameRow
                      team={a.team}
                      result={a.result}
                      time={a.time}
                      score={a.score}
                    />
                  ))}
                </tbody>
              </table>

              <TransitionGroup>
                <CSSTransition
                  key={this.state.lastNews[this.state.lastCount].id}
                  timeout={4500}
                  classNames="slide"
                >
                  <LastNew
                    key={this.state.lastCount}
                    title={this.state.lastNews[this.state.lastCount].title}
                    subtitle={
                      this.state.lastNews[this.state.lastCount].subtitle
                    }
                  />
                </CSSTransition>
              </TransitionGroup>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default TeamPage;

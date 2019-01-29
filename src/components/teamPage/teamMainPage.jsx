import React, { Component } from "react";
import Member from "./member";
import { Grid, Menu, Button, Segment } from "semantic-ui-react";
import GameRow from "./gameResult";
import LastNew from "../mainPage/lastNew.jsx";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "views/style.css";
import _ from "lodash";
import axios from 'axios';

class TeamPage extends Component {
  state = {
    members: [],
    gameResults: [
      {
        team: "T1",
        result: "1:2:L",
        time: "1/2/4",
        score: 4,
        status: -1
      },
      {
        team: "T2",
        result: "2:2:E",
        time: "2/2/4",
        score: 2,
        status: 0
      },
      {
        team: "T3",
        result: "2:2:E",
        time: "6/2/4",
        score: 9,
        status: 0
      },
      {
        team: "T4",
        result: "3:2:W",
        time: "5/2/4",
        score: 6,
        status: 1
      }
    ],
    lastNews: [
      { id: 1, title: "basket1", subtitle: "iran won" },
      { id: 2, title: "basket2", subtitle: "iran loose" },
      { id: 3, title: "basket3", subtitle: "iran loose" },
      { id: 4, title: "basket4", subtitle: "iran loose" }
    ],
    lastCount: 0,
    column: null,
    direction: "descending"
  };
  componentDidMount() {
    const { match: { params } } = this.props;
    console.log(this.props);

    axios.get(`http://localhost:8000/teamPage/teamNews/${params.teamName}`)
      .then(response => {
        console.log(response.data)
        this.setState({ lastNews: response.data })

      })


    axios.get(`http://localhost:8000/teamPage/gameResults/${params.teamName}`)
      .then(response => {
        console.log(response.data)
        const newData = Array.from(response.data, (a) => {
          if (a.team1 == params.teamName) {

            return {
              team: a.team2, result: a.team1_score + "-" + a.team2_score, time: a.date, score: a.team1_point,
              status: a.status
            }
          } else {

            return {
              team: a.team1, result: a.team2_score + "-" + a.team1_score, time: a.date, score: a.team2_point,
              status: (-1) * a.status
            }
          }


        }
        )
        this.setState({ gameResults: newData })

      });



    axios.get(`http://localhost:8000/teamPage/teamMembers/${params.teamName}`)
      .then(response => {
        this.setState({ members: response.data })

      })

    console.log("******bad*******");
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

  handleItemClick = (e, { name }) => {

    const { match: { params } } = this.props;
    axios.get(`http://localhost:8000/teamPage/gameResults/${params.teamName}`, {
      params: {
        sort: name
      }
    })
      .then(response => {
        const newData = Array.from(response.data, (a) => {
          console.log(newData)
          if (a.team1 == params.teamName) {

            return {
              team: a.team2, result: a.team1_score + "-" + a.team2_score, time: a.date, score: a.team1_point,
              status: a.status
            }
          } else {

            return {
              team: a.team1, result: a.team2_score + "-" + a.team1_score, time: a.date, score: a.team2_point,
              status: (-1) * a.status
            }
          }


        }
        )
        this.setState({ gameResults: newData, activeItem: name })

      })



    // if (column !== name) {
    //   this.setState({
    //     column: name,
    //     gameResults:
    //       name !== "loose"
    //         ? _.sortBy(gameResults, [tmpName]).reverse()
    //         : _.sortBy(gameResults, [tmpName]),
    //     activeItem: name
    //   });
    // }
  };
  render() {
    const { activeItem, gameResults, members } = this.state;
    return (
      <div>
        <img src={require("./team.jpg")} style={{ width: "100%" }} />
        <br />
        <br />
        <div className="teamContainer">
          <Grid columns={2} stackable centered>
            <Grid.Row>
              <Grid.Column width={10}>
                <Segment color="red" secondary>
                  <div className="container">
                    <div className="row">
                      {members.map(a => (
                        <Member image={a.image} name={a.name} born={a.born} position={a.rule} previousClub={a.previousClub} squad={a.squad} />
                      ))}
                    </div>
                  </div>
                </Segment>
              </Grid.Column>

              <Grid.Column width={6}>
                <Segment color="red" secondary>
                  <img src={require("./logo.jpg")} style={{ width: "100%" }} />
                  <br />
                  <br />
                  <Button
                    fluid
                    circular
                    color="red"
                    content="Like"
                    icon="heart"
                    label={{
                      basic: true,
                      color: "red",
                      pointing: "left",
                      content: "2,048"
                    }}
                  />{" "}
                  <Menu inverted stackable fluid>
                    <Menu.Item header>Sort By</Menu.Item>

                    <Menu.Item> </Menu.Item>
                  </Menu>
                  <Menu compact stackable fluid>
                    <Menu.Item
                      name="win"
                      active={activeItem === "win"}
                      onClick={this.handleItemClick}
                      color="red"
                    />
                    <Menu.Item
                      name="loose"
                      active={activeItem === "loose"}
                      onClick={this.handleItemClick}
                      color="red"
                    />
                    <Menu.Item
                      color="red"
                      name="date"
                      active={activeItem === "time"}
                      onClick={this.handleItemClick}
                    />
                    <Menu.Item
                      color="red"
                      name="score"
                      active={activeItem === "score"}
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
                      {gameResults.map(a => (
                        <GameRow
                          key={a.team}
                          team={a.team}
                          result={a.result}
                          time={a.time}
                          score={a.score}
                        />
                      ))}
                    </tbody>
                  </table>
                </Segment>


                <div className="paincontainer">
                  <div className="pane">
                    {this.state.lastNews.map(a => (
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

              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default TeamPage;

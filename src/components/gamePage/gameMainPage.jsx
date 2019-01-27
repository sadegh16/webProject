import React, { Component } from "react";
import EventLine from "./eventLine";
import "views/style.css";
import RespTable from "../respTable";
import { Grid, Segment, Container } from "semantic-ui-react";
import FootBallGame from "./footballGame";
import BasketGame from "./basketGame";
import axios from 'axios';

class GameMainPage extends Component {
  state = {
    report: NaN,
    generalInfo: [],
    specialInfo: [],
    playerInfo: [],
    field: "basketball",
    events: [
      // ["start Game"],
      // ["Event1 happend"],
      // ["Event2 happend"],
      // ["Event3 happend", "Event4 happend"],
      // ["Event5 happend"],
      // ["Event6 happend"],
      // ["Event7 happend"],
      // ["Event8 happend"]
    ]
  };

  componentDidMount() {
    const { match: { params } } = this.props;

    axios.get(`http://localhost:8000/gamePage/generalDetail/`, {

      params: {
        team1: params.team1,
        team2: params.team2,
        date: params.date,
      }

    })
      .then(response => {
        const newData = []
        newData.push({ team1: response.data[0].team1, title: "name", team2: response.data[0].team2 })
        newData.push({ team1: response.data[0].team1_score, title: "score", team2: response.data[0].team2_score })
        newData.push({ team1: response.data[0].team1_point, title: "point", team2: response.data[0].team2_point })
        console.log(newData)
        this.setState({ generalInfo: newData })


      })

    axios.get(`http://localhost:8000/gamePage/specialDetail/`, {
      params: {
        team1: params.team1,
        team2: params.team2,
        date: params.date,
      }
    })
      .then(response => {
        console.log(response)
        this.setState({
          specialInfo: response.data,
        })
      })

    axios.get(`http://localhost:8000/gamePage/eventLine/`, {
      params: {

        team1: params.team1,
        team2: params.team2,
        date: params.date,
      }
    })
      .then(response => {
        console.log(response)
        this.setState({
          events: response.data,
        })
      })


    axios.get(`http://localhost:8000/gamePage/membersDetail/`, {
      params: {

        team1: params.team1,
        team2: params.team2,
        date: params.date,
      }
    })
      .then(response => {
        const newData = Array.from(response.data, (a) => {
          return { name: a.name, post: a.post, changeTime: a.changingTime, playTime: a.playTime }
        }
        )
        this.setState({ playerInfo: newData })


      })




    var intervalId = setInterval(() => {

      axios.get(`http://localhost:8000/gamePage/gameReport/`, {
        params: {

          team1: params.team1,
          team2: params.team2,
          date: params.date,
        }
      })
        .then(response => {
          this.setState({ report: response.data })

        })

    }, 5500);

  }
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
                    <EventLine time={a.time} text={a.text} />
                  ))}
                </div>
              </div>
            </Segment>
          </Grid.Column>
          <Grid.Column width={10}>
            {this.state.field === "basketball" ? (
              <FootBallGame generalInfo={this.state.generalInfo} specialInfo={this.state.specialInfo}
                playerInfo={this.state.playerInfo} report={this.state.report} />
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

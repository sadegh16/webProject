import React, { Component } from "react";
import EventLine from "./eventLine";
import "views/style.css";
import RespTable from "../respTable";
import { Grid, Button, Segment, Container } from "semantic-ui-react";
import FootBallGame from "./footballGame";
import BasketGame from "./basketGame";
import axios from 'axios';
import LastNew from "../mainPage/lastNew.jsx";
import { Redirect } from 'react-router';
class GameMainPage extends Component {
  state = {
    report: NaN,
    generalInfo: [],
    specialInfo: [],
    playerInfo: [],
    field: "basketball",
    media1: NaN,
    media2: NaN,

    events: [

    ],
    lastNews: [],
    likes: NaN
  };

  componentDidMount() {
    const { match: { params } } = this.props;

    axios.get(`http://localhost:8000/gamePage/gameNews/`, {

      params: {
        team1: params.team1,
        team2: params.team2,
        date: params.date,
      }
    })
      .then(response => {
        console.log(response.data)
        this.setState({ lastNews: response.data })

      })

    axios.get(`http://localhost:8000/gamePage/generalDetail/`, {

      params: {
        team1: params.team1,
        team2: params.team2,
        date: params.date,
      }

    })
      .then(response => {
        const newData = []
        console.log("******" + response.data)
        if (response.data.length > 0) {
          newData.push({ team1: response.data[0].team1, title: "name", team2: response.data[0].team2 })
          newData.push({ team1: response.data[0].team1_score, title: "score", team2: response.data[0].team2_score })
          newData.push({ team1: response.data[0].team1_point, title: "point", team2: response.data[0].team2_point })
          console.log(newData)

          this.setState({
            generalInfo: newData,
            media1: response.data[0].media1,
            media2: response.data[0].media2,
            likes: response.data[0].likes
          })
        }

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
  likeClick = () => {
    const { match: { params } } = this.props;
    console.log(params)
    axios.post(`http://localhost:8000/gamePage/addFavorite/`, null, {
      params: {
        team1: params.team1,
        team2: params.team2,
        date: params.date,
      }
    })



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
            <Button
              fluid
              circular
              onClick={this.likeClick}
              color="red"
              content="Like"
              icon="heart"
              label={{
                basic: true,
                color: "red",
                pointing: "left",
                content: this.state.likes
              }}
            />
          </Grid.Column>
          <Grid.Column width={10}>
            <FootBallGame generalInfo={this.state.generalInfo} specialInfo={this.state.specialInfo}
              playerInfo={this.state.playerInfo} report={this.state.report} lastNews={this.state.lastNews}
              media1={this.state.media1} media2={this.state.media2} />
            {/* {this.state.field === "basketball" ? (
              <FootBallGame generalInfo={this.state.generalInfo} specialInfo={this.state.specialInfo}
                playerInfo={this.state.playerInfo} report={this.state.report} lastNews={this.state.lastNews} />
            ) : (
                <BasketGame />
              )} */}
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default GameMainPage;

import React, { Component } from "react";
import { Grid, Segment, Image } from "semantic-ui-react";
import FlexTable from "../table";
import RespTable from "../respTable";
import LastNew from "../mainPage/lastNew.jsx";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import axios from 'axios';
class PlayerMainPage extends Component {
  state = {
    specialtableData: [],
    lastNews: [
      {
        id: 1,
        title: "felan1",
        subtitle: "maaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaatne khabarrr"
      },
      {
        id: 2,
        title: "felan2",
        subtitle: "maaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaatne khabarrr"
      },
      {
        id: 3,
        title: "felan3",
        subtitle: "maaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaatne khabarrr"
      },
      {
        id: 4,
        title: "felan4",
        subtitle: "maaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaatne khabarrr"
      }
    ],
    lastCount: 0,
    generalInfoHeader: [
      "name",
      "age",
      "height",
      "weight",
      "current Team",
      "national",
      "rule"
    ],
    generaltableData: [

    ],
    specialInfoHeader: [],
    img: NaN,
    bio: NaN

  };
  componentDidMount() {


    const { match: { params } } = this.props;

    axios.get(`http://localhost:8000/playerPage/springDetail/${params.pid}`)
      .then(response => {
        this.setState({ specialtableData: response.data })
      });


    axios.get(`http://localhost:8000/playerPage/generalDetail/${params.pid}`)
      .then(response => {


        if (response.data[0].type == "footballist") {
          this.setState({
            generaltableData: response.data,
            specialInfoHeader: [
              "spring",
              "goals",
              "goalPass",
              "cards",

            ],
            img: response.data[0].image,
            bio: response.data[0].bio

          })
        } else {
          this.setState({
            generaltableData: response.data,
            specialInfoHeader: [
              "2scoreGoals",
              "3scoreGoals",
              "fault ",
              "ribsndhs",
              "play time"

            ]
          })
        }

      });
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

  render() {
    return (
      <Grid stackable columns={2}>
        <Grid.Column width={6}>
          <Segment>
            <Image src={`http://localhost:8000/${this.state.img}`} />
          </Segment>
        </Grid.Column>
        <Grid.Column width={10}>
          <Segment>
            <p>
              {this.state.bio}
            </p>
          </Segment>
          <RespTable
            header={this.state.generalInfoHeader}
            data={this.state.generaltableData}
          />
          <hr />
          <RespTable
            header={this.state.specialInfoHeader}
            data={this.state.specialtableData}
          />

          <br />
          <hr />
          <TransitionGroup>
            <CSSTransition
              key={this.state.lastNews[this.state.lastCount].id}
              timeout={4500}
              classNames="slide"
            >
              <LastNew
                key={this.state.lastCount}
                title={this.state.lastNews[this.state.lastCount].title}
                subtitle={this.state.lastNews[this.state.lastCount].subtitle}
              />
            </CSSTransition>
          </TransitionGroup>
        </Grid.Column>
      </Grid>
    );
  }
}

export default PlayerMainPage;

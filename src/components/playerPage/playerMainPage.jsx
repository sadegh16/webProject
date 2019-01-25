import React, { Component } from "react";
import { Grid, Segment, Image } from "semantic-ui-react";
import FlexTable from "../table";
import RespTable from "../respTable";
import LastNew from "../mainPage/lastNew.jsx";
import { CSSTransition, TransitionGroup } from "react-transition-group";
class PlayerMainPage extends Component {
  state = {
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
      "Name",
      "age",
      "height",
      "weight",
      "current Team",
      "national",
      "rule"
    ],
    generaltableData: [
      {
        name: "John",
        age: "15",
        height: "Male",
        height: "23",
        weight: "sss",
        currentTeam: "sss",
        national: "ss",
        rule: "ss"
      }
    ],
    specialInfoHeader1: [
      "spring",
      "#goals",
      "#goalPass",
      "height",
      "weight",
      "current Team",
      "national",
      "rule"
    ],
    specialtableData1: [
      {
        spring: "bahar1",
        goals: "John",
        goalPass: "15",
        height: "Male",
        weight: "23",
        currentTeam: "sss",
        national: "ss",
        rule: "ss"
      },
      {
        spring: "bahar2",
        goals: "John",
        goalPass: "15",
        height: "Male",
        weight: "23",
        currentTeam: "sss",
        national: "ss",
        rule: "ss"
      },
      {
        spring: "bahar3",
        goals: "John",
        goalPass: "15",
        height: "Male",
        weight: "23",
        currentTeam: "sss",
        national: "ss",
        rule: "ss"
      }
    ],
    specialInfoHeader2: [
      "2scoreGoals",
      "3scoreGoals",
      "fault ",
      "ribsndhs",
      "play time"
    ],
    specialtableData2: [
      {
        twoscoreGoals: "John",
        threescoreGoals: "15",
        fault: "Male",
        ribsndhs: "23",
        playTime: "sss"
      },
      {
        twoscoreGoals: "John",
        threescoreGoals: "15",
        fault: "Male",
        ribsndhs: "23",
        playTime: "sss"
      },
      {
        twoscoreGoals: "John",
        threescoreGoals: "15",
        fault: "Male",
        ribsndhs: "23",
        playTime: "sss"
      }
    ]
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

  render() {
    return (
      <Grid stackable columns={2}>
        <Grid.Column width={6}>
          <Segment>
            <Image src={require("../teamPage/salam.jpg")} />
          </Segment>
        </Grid.Column>
        <Grid.Column width={10}>
          <Segment>
            <p>
              kldfweefnwkljnvfwnernverkv <br />
              verkjngvkljernvkgmrekvgmkerklmvlkregv
              vwlkmflkweflkewlgfrwlkngvklren vlkre <br />
              efwlkmceklwfmlwekrnfkerwnmfnwcrelnkfvwrelkgvmreklmglvkrwelkgvnrev
            </p>
          </Segment>
          <RespTable
            header={this.state.generalInfoHeader}
            data={this.state.generaltableData}
          />
          <hr />
          <RespTable
            header={this.state.specialInfoHeader1}
            data={this.state.specialtableData1}
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

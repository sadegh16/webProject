import React, { Component } from "react";
import { Grid, Segment, Image, Container, GridColumn } from "semantic-ui-react";
import CommentManager from "./commentManager.jsx";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "views/style.css";
import commentManager from "./commentManager";
import LastNew from "../mainPage/lastNew.jsx";
class MainNewPage extends Component {
  state = {
    pm: (
      <p>
        <h1>ssssssss</h1>
        kldfweefnwkljnvfwnernverkv <br />
        verkjngvkljernvkgmrekvgmkerklmvlkregv vwlkmflkweflkewlgfrwlkngvklren
        vlkre <br />
        efwlkmceklwfmlwekrnfkerwnmfnwcrelnkfvwrelkgvmreklmglvkrwelkgvnrev
        kldfweefnwkljnvfwnernverkv <br />
        verkjngvkljernvkgmrekvgmkerklmvlkregv vwlkmflkweflkewlgfrwlkngvklren
        vlkre <br />
        efwlkmceklwfmlwekrnfkerwnmfnwcrelnkfvwrelkgvmreklmglvkrwelkgvnrev
      </p>
    ),
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

  render() {
    return (
      <containter>
        <Grid doubling columns={2} textAlign="left">
          <Grid.Column width={12}>
            <Segment>
              <Image src={require("./1.jpg")} />
              <br />
              <br />
              {this.state.pm}
              <br />
              <br />
              <CommentManager />
            </Segment>
          </Grid.Column>
          <Grid.Column width={4}>
            <h2>Related To</h2>
            <br />
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
          </Grid.Column>{" "}
        </Grid>
      </containter>
    );
  }
}

export default MainNewPage;

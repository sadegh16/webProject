import React, { Component } from "react";
import { Grid, Segment, Image, Container } from "semantic-ui-react";
import CommentManager from "./commentManager.jsx";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "views/style.css";
import commentManager from "./commentManager";
import LastNew from "../mainPage/lastNew.jsx";
class MainNewPage extends Component {
  state = {
    pm: (
      <p>
        kldfweefnwkljnvfwnernverkv <br />
        verkjngvkljernvkgmrekvgmkerklmvlkregv vwlkmflkweflkewlgfrwlkngvklren
        vlkre <br />
        efwlkmceklwfmlwekrnfkerwnmfnwcrelnkfvwrelkgvmreklmglvkrwelkgvnrev
        kldfweefnwkljnvfwnernverkv <br />
        verkjngvkljernvkgmrekvgmkerklmvlkregv vwlkmflkweflkewlgfrwlkngvklren
        vlkre <br />
        efwlkmceklwfmlwekrnfkerwnmfnwcrelnkfvwrelkgvmreklmglvkrwelkgvnrev
      </p>
    )
  };
  render() {
    return (
      <Container textAlign="left">
        <Grid columns={1} centered>
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
        </Grid>
      </Container>
    );
  }
}

export default MainNewPage;

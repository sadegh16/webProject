import React, { Component } from "react";
import { Grid, Segment, Image, Button, GridColumn } from "semantic-ui-react";
import CommentManager from "./commentManager.jsx";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "views/style.css";
import commentManager from "./commentManager";
import LastNew from "../mainPage/lastNew.jsx";
import axios from 'axios';

class MainNewPage extends Component {
  state = {
    comments: [],
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


  helperFunc = (textComment) => {
    const { match: { params } } = this.props;

    const comments = [...this.state.comments];
    const c = {
      name: "sadegh",
      time: "today",
      text: textComment
    }

    console.log(c)
    comments.push(c);
    axios.post(`http://localhost:8000/newPage/addComment/${params.id}`, c)


    this.setState({ comments });
  }
  componentDidMount() {
    const { match: { params } } = this.props;

    axios.get(`http://localhost:8000/newPage/data/${params.id}`)
      .then(response => {
        console.log(response.data)
        this.setState({ pm: response.data })

      })

    axios.get(`http://localhost:8000/newPage/related/${params.id}`)
      .then(response => {
        console.log(response.data)
        this.setState({
          lastNews: response.data,
          lastCount: 0
        })

      })

    axios.get(`http://localhost:8000/newPage/comments/${params.id}`)
      .then(response => {
        console.log("********************" + response.data)
        this.setState({ comments: response.data })

      })
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
      <div className="newsPage">
        {/* <containter > */}
        <Grid doubling columns={2} textAlign="left">
          <Grid.Column width={12}>
            <Segment>
              <Image src={`http://localhost:8000/${this.state.pm.image}`} />

              <br />
              <Button
                color="red"
                content="Like"
                icon="heart"
                label={{
                  basic: true,
                  color: "red",
                  pointing: "left",
                  content: "2,048"
                }}
              />
              <br />

              <p>
                <h1>{this.state.pm.title}</h1>
                <h3>{this.state.pm.subtitle}</h3>
                <h4>{this.state.pm.releaseDate}</h4>
                <h7>{this.state.pm.content}</h7>


              </p>
              <br />
              <br />
              <CommentManager helperFunc={this.helperFunc} comments={this.state.comments} id={this.state.pm.id} />
            </Segment>
          </Grid.Column>
          <Grid.Column width={4}>
            <h2>Related To</h2>
            <br />
            <Segment inverted secondary>
              <Segment className="slideShow">
                <TransitionGroup>
                  <CSSTransition
                    key={this.state.lastNews[this.state.lastCount].id}
                    timeout={4500}
                    classNames="move"
                  >
                    <Segment>
                      <LastNew
                        key={this.state.lastCount}
                        title={this.state.lastNews[this.state.lastCount].title}
                        subtitle={this.state.lastNews[this.state.lastCount].subtitle}
                        content={this.state.lastNews[this.state.lastCount].content}
                        image={this.state.lastNews[this.state.lastCount].image}
                        releaseTime={this.state.lastNews[this.state.lastCount].releaseTime}

                      />
                    </Segment>
                  </CSSTransition>
                </TransitionGroup>
              </Segment>
            </Segment>
            <Segment inverted secondary>
              <video
                controls
                src={`http://localhost:8000/${this.state.pm.media}`}
                style={{ width: "100%" }}
              />

            </Segment>
          </Grid.Column>
        </Grid>
        {/* </containter> */}
      </div>

    );
  }
}

export default MainNewPage;

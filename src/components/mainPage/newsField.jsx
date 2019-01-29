import React, { Component } from "react";
import LastNew from "./lastNew";
import Favorite from "./favorite";
import { Input, Button, Segment } from "semantic-ui-react";

import { CSSTransition, TransitionGroup } from "react-transition-group";
import "views/style.css";
import axios from 'axios';

class NewsField extends Component {
  state = {
    newsLimit: 10,

    field: this.props.field,
    favorites: [
    ],
    favorCount: 0,
    lastNews: [
      { id: 1, title: "basket1", subtitle: "iran won" },
      { id: 2, title: "basket2", subtitle: "iran loose" },
      { id: 3, title: "basket3", subtitle: "iran loose" },
      { id: 4, title: "basket4", subtitle: "iran loose" }
    ],
    lastCount: 0,
  };
  focus = () => {
    console.log(this.state.newsLimit)
    console.log("in focuse***********")

    axios.get(`http://localhost:8000/mainPage/lastNews/`, {
      params: {

        limit: this.state.newsLimit
      }
    })
      .then(response => {
        console.log(response.data)
        this.setState({
          lastNews: response.data,
          lastCount: 0
        })

      })
  }
  handleChange = (e, { value }) => {
    (this.state.newsLimit = value)
    console.log(value)

  }

  componentDidMount() {
    console.log("***********")
    this.state.newsLimit = 10
    axios.get(`http://localhost:8000/mainPage/lastNews/`, {
      params: {

        limit: this.state.newsLimit
      }
    })
      .then(response => {
        console.log(response.data)
        this.setState({ lastNews: response.data })

      })



    var intervalId = setInterval(() => {
      this.setState({
        lastCount: (this.state.lastCount + 1) % this.state.lastNews.length,
        favorCount: (this.state.favorCount + 1) % this.state.favorites.length
      });
    }, 5500);

    this.setState({ intervalId: intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    return (
      <div>
        <div >
          <Button content='lastNews' onClick={this.focus} />
          <Input onChange={this.handleChange} placeholder='news number' />
        </div>
        <dir className="field" >
          <div className="field">
            <div className="newsRow">
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

                      />
                    </Segment>
                  </CSSTransition>
                </TransitionGroup>
              </Segment>

              {/* <TransitionGroup>
            <CSSTransition
              key={this.state.favorites[this.state.favorCount].id}
              timeout={3000}
              classNames="slide"
            >
              <Favorite
                team={this.state.favorites[this.state.favorCount].team}
                teamNew={this.state.favorites[this.state.favorCount].teamNew}
              />
            </CSSTransition>
          </TransitionGroup> */}

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
            </div>
          </div>

          <div className="field">

            <div className="newsRow">
              {/* 
              <TransitionGroup>
                <CSSTransition
                  key={this.state.lastNews[this.state.lastCount].id}
                  timeout={4500}
                  classNames="move"
                >
                  <LastNew
                    key={this.state.lastCount}
                    title={this.state.lastNews[this.state.lastCount].title}
                    subtitle={this.state.lastNews[this.state.lastCount].subtitle}
                    content={this.state.lastNews[this.state.lastCount].content}
                    image={this.state.lastNews[this.state.lastCount].image}

                  />
                </CSSTransition>
              </TransitionGroup> */}

              {this.state.favorites.length > 0 ?
                <div>
                  <TransitionGroup>
                    <CSSTransition
                      key={this.state.favorites[this.state.favorCount].id}
                      timeout={3000}
                      classNames="slide"
                    >
                      <LastNew
                        key={this.state.lastCount}
                        title={this.state.lastNews[this.state.lastCount].title}
                        subtitle={this.state.lastNews[this.state.lastCount].subtitle}
                        content={this.state.lastNews[this.state.lastCount].content}
                        image={this.state.lastNews[this.state.lastCount].image}

                      />
                      />
                </CSSTransition>
                  </TransitionGroup>

                  <div className="paincontainer">
                    <div className="pane">
                      {this.state.favorites.map(a => (
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
                </div>
                : <h1 > NO Favorite</h1>}

            </div>
          </div>

        </dir>



      </div>
    );
  }
}

export default NewsField;

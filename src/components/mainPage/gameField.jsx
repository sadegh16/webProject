import React, { Component } from "react";
import Game from "./game";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "views/style.css";
import axios from 'axios';
import { Input, Button, Segment } from "semantic-ui-react";


//
class GameField extends Component {
  state = {
    lastCount: 0,
    field: this.props.field,
    favorites: [],
    favorCount: 0,
    games: [{ id: 1 }],
    gameCount: 0,
    login: false
  };
  isLogin = () => {
    axios.get(`http://localhost:8000/isLogin`, { params: { key: localStorage.getItem('django_sport_key') } })
      .then(resp => {
        this.setState({ login: resp.data })
      })

  }

  componentDidMount() {
    this.isLogin()

    console.log("***********")
    axios.get(`http://localhost:8000/mainPage/allGames/`)
      .then(response => {
        console.log(response.data)
        this.setState({ games: response.data })

      })




    var intervalId = setInterval(() => {
      this.setState({
        lastCount: (this.state.lastCount + 1) % this.state.games.length,
        favorCount: (this.state.favorCount + 1) % this.state.favorites.length
      });
    }, 4400);

    this.setState({ intervalId: intervalId });
  }
  news;

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    return (
      <div>
        <br />
        <br />


        <div className="field" >
          <div className="field">
            <div className="gamesRow">
              <Segment className="slideShow gameSilde"  >
                <TransitionGroup>
                  <CSSTransition
                    key={this.state.games[this.state.lastCount].id}
                    timeout={4500}
                    classNames="move"
                  >
                    <Game
                      key={this.state.lastCount}
                      team1={this.state.games[this.state.lastCount].team1}
                      team2={this.state.games[this.state.lastCount].team2}
                      team1_score={this.state.games[this.state.lastCount].team1_score}
                      team2_score={this.state.games[this.state.lastCount].team2_score}
                      team1_point={this.state.games[this.state.lastCount].team1_point}
                      team2_point={this.state.games[this.state.lastCount].team2_point}
                      date={this.state.games[this.state.lastCount].date}
                      image={this.state.games[this.state.lastCount].image}

                    />
                  </CSSTransition>
                </TransitionGroup>
              </Segment>
              <div className="paincontainer">
                <div className="pane">
                  {this.state.games.map(a => (
                    <Segment>
                      <Game
                        key={this.state.lastCount}
                        team2={a.title}
                        team1={a.title}
                        team1_score={a.team1_score}
                        team2_score={a.team2_score}
                        team1_point={a.team1_point}
                        team2_point={a.team2_point}
                        date={a.date}
                        image={a.image}

                      />
                    </Segment>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* 
          <div className="field">

            <div className="newsRow">
              {this.state.favorites.length > 0 ?
                <div>
                  <TransitionGroup>
                    <CSSTransition
                      key={this.state.favorites[this.state.favorCount].id}
                      timeout={3000}
                      classNames="slide"
                    >
                      <Game
                        key={this.state.lastCount}
                        team2={this.state.favorites[this.state.lastCount].title}
                        team1={this.state.favorites[this.state.lastCount].title}
                        team1_score={this.state.favorites[this.state.lastCount].team1_score}
                        team2_score={this.state.favorites[this.state.lastCount].team2_score}
                        team1_point={this.state.favorites[this.state.lastCount].team1_point}
                        team2_point={this.state.favorites[this.state.lastCount].team2_point}
                        date={this.state.favorites[this.state.lastCount].date}
                        image={this.state.favorites[this.state.lastCount].image}

                      />
                      />
            </CSSTransition>
                  </TransitionGroup>

                  <div className="paincontainer">
                    <div className="pane">
                      {this.state.favorites.map(a => (
                        <Segment>
                          <Game
                            key={this.state.lastCount}
                            team2={a.title}
                            team1={a.title}
                            team1_score={a.team1_score}
                            team2_score={a.team2_score}
                            team1_point={a.team1_point}
                            team2_point={a.team2_point}
                            date={a.date}
                            image={a.image}

                          />
                          />
                      </Segment>
                      ))}
                    </div>
                  </div>
                </div>
                : <h1 > NO Favorite</h1>}

            </div>
          </div> */}




          {this.state.login ? this.state.favorites.length > 0 ?
            <div className="field">
              <div className="newsRow">
                <TransitionGroup>
                  <CSSTransition
                    key={this.state.favorites[this.state.favorCount].id}
                    timeout={3000}
                    classNames="slide"
                  >
                    <Game
                      key={this.state.lastCount}
                      team2={this.state.favorites[this.state.lastCount].title}
                      team1={this.state.favorites[this.state.lastCount].title}
                      team1_score={this.state.favorites[this.state.lastCount].team1_score}
                      team2_score={this.state.favorites[this.state.lastCount].team2_score}
                      team1_point={this.state.favorites[this.state.lastCount].team1_point}
                      team2_point={this.state.favorites[this.state.lastCount].team2_point}
                      date={this.state.favorites[this.state.lastCount].date}
                      image={this.state.favorites[this.state.lastCount].image}

                    />
                    />
            </CSSTransition>
                </TransitionGroup>

                <div className="paincontainer">
                  <div className="pane">
                    {this.state.favorites.map(a => (
                      <Segment>
                        <Game
                          key={this.state.lastCount}
                          team2={a.title}
                          team1={a.title}
                          team1_score={a.team1_score}
                          team2_score={a.team2_score}
                          team1_point={a.team1_point}
                          team2_point={a.team2_point}
                          date={a.date}
                          image={a.image}

                        />
                        />
                      </Segment>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            : <div className="field"><h1 > NO Favorite</h1></div>
            : null}






        </div>

      </div>
    )
  }
}

export default GameField;

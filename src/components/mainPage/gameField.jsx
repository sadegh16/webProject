import React, { Component } from "react";
import LastNew from "./lastNew";
import Favorite from "./favorite";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "views/style.css";
//
class GameField extends Component {
  state = {
    field: this.props.field,
    favorites: [
      { id: 1, team: "favorGame1", teamNew: "won" },
      { id: 2, team: "favorGame2", teamNew: "loose" },
      { id: 3, team: "favorGame3", teamNew: "not played" },
      { id: 4, team: "favorGame4", teamNew: "win" }
    ],
    favorCount: 0,
    todayGames: [
      { id: 1, title: "soccer1", subtitle: "won" },
      { id: 2, title: "basket2", subtitle: "loose" },
      { id: 3, title: "soccer3", subtitle: "win" },
      { id: 4, title: "basket4", subtitle: "loose" }
    ],
    gameCount: 0
  };

  componentDidMount() {
    var intervalId = setInterval(() => {
      this.setState({
        lastCount: (this.state.gameCount + 1) % this.state.todayGames.length,
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
      <div className="gamesRow">
        <h2>{this.state.field}</h2>
        <TransitionGroup>
          <CSSTransition
            key={this.state.todayGames[this.state.gameCount].id}
            timeout={4500}
            classNames="move"
          >
            <LastNew
              key={this.state.gameCount}
              title={this.state.todayGames[this.state.gameCount].title}
              subtitle={this.state.todayGames[this.state.gameCount].subtitle}
            />
          </CSSTransition>
        </TransitionGroup>
        <TransitionGroup>
          <CSSTransition
            key={this.state.favorites[this.state.favorCount].id}
            timeout={6000}
            classNames="slide"
          >
            <Favorite
              team={this.state.favorites[this.state.favorCount].team}
              teamNew={this.state.favorites[this.state.favorCount].teamNew}
            />
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

export default GameField;

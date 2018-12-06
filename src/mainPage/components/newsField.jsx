import React, { Component } from "react";
import LastNew from "./lastNew";
import Favorite from "./favorite";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../style.css";
class NewsField extends Component {
  state = {
    field: this.props.field,
    favorites: [
      { id: 1, team: "favorTeam1", teamNew: "won" },
      { id: 2, team: "favorTeam2", teamNew: "loose" },
      { id: 3, team: "favorTeam3", teamNew: "loose" },
      { id: 4, team: "favorTeam4", teamNew: "loose" }
    ],
    favorCount: 0,
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
      <div className="newsRow">
        <h2>{this.state.field}</h2>
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

export default NewsField;

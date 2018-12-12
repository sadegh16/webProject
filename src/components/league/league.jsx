import React, { Component } from "react";
import LeagueList from "./LeagueList";
import SortedTable from "../sortedTable";
import CupComp from "./CupComp";
const dataH = {
  b2: {
    array: [1, 2, 3, 4, 5, 6, 7, 8, 2, 3, 5, 7, 3, 5, 5],
    title: "Cup",
    inf: [
      { from: 0, to: 4 },
      { from: 8, to: 10 },
      { from: 12, to: 13 },
      { from: 15, to: 15 },
      { from: 13, to: 14 },
      { from: 10, to: 12 },
      { from: 4, to: 8 }
    ]
  },
  b1: [
    { Team: "w1", games: 2, Win: 1, Equal: 1, Lost: 1, Score: 1 },
    { Team: "w2", games: 2, Win: 13, Equal: 1, Lost: 1, Score: 11 },
    { Team: "w3", games: 2, Win: 1, Equal: 1, Lost: 1, Score: 12 },
    { Team: "w4", games: 2, Win: 3, Equal: 1, Lost: 1, Score: 13 },
    { Team: "w5", games: 2, Win: 1, Equal: 1, Lost: 1, Score: 14 },
    { Team: "w6", games: 2, Win: 1, Equal: 1, Lost: 1, Score: 15 },
    { Team: "w7", games: 2, Win: 1, Equal: 1, Lost: 1, Score: 16 },
    { Team: "w8", games: 2, Win: 1, Equal: 1, Lost: 1, Score: 16 },
    { Team: "w9", games: 2, Win: 1, Equal: 1, Lost: 1, Score: 12 }
  ],
  f1: [
    { Team: "w1", games: 2, Win: 1, Equal: 1, Lost: 1, Score: 4 },
    { Team: "w2", games: 2, Win: 1, Equal: 1, Lost: 1, Score: 1 },
    { Team: "w3", games: 2, Win: 1, Equal: 1, Lost: 1, Score: 2 },
    { Team: "w4", games: 2, Win: 1, Equal: 1, Lost: 1, Score: 3 },
    { Team: "w5", games: 2, Win: 1, Equal: 1, Lost: 1, Score: 4 },
    { Team: "w6", games: 2, Win: 1, Equal: 1, Lost: 1, Score: 5 },
    { Team: "w7", games: 2, Win: 1, Equal: 1, Lost: 1, Score: 6 },
    { Team: "w8", games: 2, Win: 1, Equal: 1, Lost: 1, Score: 6 },
    { Team: "w9", games: 2, Win: 1, Equal: 1, Lost: 1, Score: 2 }
  ]
};
const sports = {
  basketball: {
    b1: { current: true, type: "league" },
    b2: { current: true, type: "Cup" },
    b3: { current: true, type: "league" }
  },
  football: {
    f1: { current: true, type: "league" },
    f2: { current: true, type: "league" },
    f3: { current: true, type: "league" }
  }
};
class League extends Component {
  changeNotif = function(cmp) {
    this.setState({ competitionID: cmp });
    if (this.state.type === "league") {
      this.state.callbackLeague();
    } else {
      this.state.callbackCup();
    }
  };
  compSetCallbackCup = function(func) {
    this.state.callbackCup = func;
  };
  compSetCallbackLeague = function(func) {
    this.state.callbackLeague = func;
  };
  state = {
    type: "league",
    competitionID: "b1",
    data: dataH,
    changeNotif: this.changeNotif.bind(this),
    compSetCallbackLeague: this.compSetCallbackLeague.bind(this),
    compSetCallbackCup: this.compSetCallbackCup.bind(this)
  };

  render() {
    return (
      <div>
        <LeagueList sports={sports} notif={this.state.changeNotif} />
        {this.state.type === "league" ? (
          <SortedTable
            passFunc={this.state.compSetCallbackLeague}
            data={this.state.data[this.state.competitionID]}
          />
        ) : (
          <CupComp
            passFunc={this.state.compSetCallbackCup}
            data={this.state.data[this.state.competitionID]}
          />
        )}
      </div>
    );
  }
}
export default League;

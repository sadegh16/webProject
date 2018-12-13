import React, { Component } from "react";
import LeagueList from "./LeagueList";
import SortedTable from "../sortedTable";
import CupComp from "./CupComp";
import faker from "faker";

import { Grid, Search } from "semantic-ui-react";
import SearchStandard from "../search";
const games = {
  b2: [
    {
      teamA: "b1",
      teamB: "b1_2",
      type: "league",
      field: "basketcup",
      result: "1:2",
      team1score: 5,
      team2score: 5
    },
    {
      teamA: "b2",
      teamB: "b2_2",
      type: "cup",
      field: "basketcup",
      result: "1:2",
      team1score: 5,
      team2score: 5
    },
    {
      teamA: "b3",
      teamB: "b3_2",
      type: "league",
      field: "basketcup",
      result: "1:2",
      team1score: 5,
      team2score: 5
    }
  ],
  b1: [
    {
      teamA: "ol,b1",
      teamB: "b1_,l.2",
      type: "leaguel,;",
      field: "basketball",
      result: "1:2",
      team1score: 5,
      team2score: 5
    },
    {
      teamA: "b2",
      teamB: "b2_2",
      type: "cup",
      field: "basketball",
      result: "1:2",
      team1score: 5,
      team2score: 5
    },
    {
      teamA: "b3",
      teamB: "b3_2",
      type: "league",
      field: "basketball",
      result: "1:2",
      team1score: 5,
      team2score: 5
    }
  ],
  f1: [
    {
      teamA: "f1",
      teamB: "f1_2",
      type: "league",
      field: "football",
      result: "1:2",
      team1score: 5,
      team2score: 5
    },
    {
      teamA: "f2",
      teamB: "f2_2",
      type: "cup",
      field: "football",
      result: "1:2",
      team1score: 5,
      team2score: 5
    },
    {
      teamA: "f3",
      teamB: "f3_2",
      type: "league",
      field: "football",
      result: "1:2",
      team1score: 5,
      team2score: 5
    }
  ]
};

const dataH = {
  b2: {
    array: [1, 2, 3, 4, 5, 6, 7, 8, 2, 3, 5, 7, 3, 5, 5],
    title: "Cup",
    inf: [
      { from: 0, to: 4, title: "1/8" },
      { from: 8, to: 10, title: "1/4" },
      { from: 12, to: 13, title: "1/2" },
      { from: 14, to: 15, title: "Winner" },
      { from: 13, to: 14, title: "1/2" },
      { from: 10, to: 12, title: "1/4" },
      { from: 4, to: 8, title: "1/8" }
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
const sports = [
  { name: "b1", current: true, type: "league", field: "basketball" },
  { name: "b2", current: false, type: "cup", field: "basketball" },
  { name: "b3", current: true, type: "league", field: "basketball" },
  { name: "f1", current: true, type: "league", field: "football" },
  { name: "f2", current: false, type: "cup", field: "football" },
  { name: "f3", current: false, type: "league", field: "football" }
];
class League extends Component {
  changeNotif = function(cmp, tp) {
    this.setState({ competitionID: cmp, type: tp });
    if (this.state.type === "league") {
      this.state.callbackLeague();
    } else {
      this.state.callbackCup();
    }
  };
  gameCallbackSetter = func => (this.state.callbackGame = func);
  compSetCallbackCup = function(func) {
    this.state.callbackCup = func;
  };
  compSetCallbackLeague = function(func) {
    this.state.callbackLeague = func;
  };
  state = {
    type: "cup",
    competitionID: "b2",
    data: dataH,
    gameCallbackSetter: this.gameCallbackSetter.bind(this),
    changeNotif: this.changeNotif.bind(this),
    compSetCallbackLeague: this.compSetCallbackLeague.bind(this),
    compSetCallbackCup: this.compSetCallbackCup.bind(this)
  };

  render() {
    return (
      <div style={{ backgroundColor: "#b8c3d6" }}>
        <Grid columns={2} stackable centered>
          <Grid.Row stretched width={10}>
            <LeagueList sports={sports} notif={this.state.changeNotif} />
          </Grid.Row>
          <Grid.Column stretched width={10}>
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
            <SortedTable
              {...console.log(games[this.state.competitionID])}
              data={games[this.state.competitionID]}
              passFunc={this.state.gameCallbackSetter}
            />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
export default League;

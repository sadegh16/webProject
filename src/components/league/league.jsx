import React, {Component} from "react";
import LeagueList from "./LeagueList";
import SortedTable from "../sortedTable";
import CupComp from "./CupComp";
import faker from "faker";
import Constants from "../../lib/utils/ConstantData";

import {Grid, Search} from "semantic-ui-react";
import SearchStandard from "../search";
import axios from 'axios';

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
    title: "Cup"
  },
  b1: [
    {Team: "w1", games: 2, Win: 1, Equal: 1, Lost: 1, Score: 1},
    {Team: "w2", games: 2, Win: 13, Equal: 1, Lost: 1, Score: 11},
    {Team: "w3", games: 2, Win: 1, Equal: 1, Lost: 1, Score: 12},
    {Team: "w4", games: 2, Win: 3, Equal: 1, Lost: 1, Score: 13},
    {Team: "w5", games: 2, Win: 1, Equal: 1, Lost: 1, Score: 14},
    {Team: "w6", games: 2, Win: 1, Equal: 1, Lost: 1, Score: 15},
    {Team: "w7", games: 2, Win: 1, Equal: 1, Lost: 1, Score: 16},
    {Team: "w8", games: 2, Win: 1, Equal: 1, Lost: 1, Score: 16},
    {Team: "w9", games: 2, Win: 1, Equal: 1, Lost: 1, Score: 12}
  ],
  f1: [
    {Team: "w1", games: 2, Win: 1, Equal: 1, Lost: 1, Score: 4},
    {Team: "w2", games: 2, Win: 1, Equal: 1, Lost: 1, Score: 1},
    {Team: "w3", games: 2, Win: 1, Equal: 1, Lost: 1, Score: 2},
    {Team: "w4", games: 2, Win: 1, Equal: 1, Lost: 1, Score: 3},
    {Team: "w5", games: 2, Win: 1, Equal: 1, Lost: 1, Score: 4},
    {Team: "w6", games: 2, Win: 1, Equal: 1, Lost: 1, Score: 5},
    {Team: "w7", games: 2, Win: 1, Equal: 1, Lost: 1, Score: 6},
    {Team: "w8", games: 2, Win: 1, Equal: 1, Lost: 1, Score: 6},
    {Team: "w9", games: 2, Win: 1, Equal: 1, Lost: 1, Score: 2}
  ]
};

class League extends Component {
  changeNotif = function (cmp, tp) {

    axios.get(Constants.host + 'competition/game/' + cmp)
      .then(response => {
        const newData = Array.from(response.data.results, (data) => {
          return {
            "date": data.date,
            "team1_score": data.team1_score,
            "team2_score": data.team2_score,
            "team1_point": data.team1_point,
            "team2_point": data.team2_point,
            "likes": data.likes,
            "team1": data.team1,
            "team2": data.team2,
            "bestPlayer": data.bestPlayer,
          }
        })
        games[cmp] = newData
        this.setState({competitionID: cmp, type: tp});
        this.state.callbackGame()
      })


    if (this.state.type === "league") {
      axios.get(Constants.host + 'competition/league/' + cmp)
        .then(response => {
          const newData = Array.from(response.data.results, (data) => {
            return {
              finished_game: data.finished_game,
              win: data.win,
              lose: data.lose,
              equal: data.equal,
              point: data.point,
              gf: data.gf,
              ga: data.ga,
              league: data.league,
              team: data.team
            }
          })
          dataH[cmp] = newData
          this.setState({competitionID: cmp, type: tp});
          this.state.callbackLeague();
        })
    } else {
      axios.get(Constants.host + 'competition/' + cmp)
        .then(response => {
          const newData = Array.from(response.data.results, (data) => {
            return {
              title: data.name + '  ' + data.type,
              image: data.image,
            }
          })
          dataH[cmp] = newData
          this.setState({competitionID: cmp, type: tp});
          this.state.callbackCup();
        })
      var array=[32]
      axios.get(Constants.host + 'competition/cup/' + cmp)
        .then(response => {
          const newData = Array.from(response.data.results, (data) => {
            return
          })
          dataH[cmp][array] = newData
          this.setState({competitionID: cmp, type: tp});
          this.state.callbackCup();
        })

    }
  };
  gameCallbackSetter = func => (this.state.callbackGame = func);
  compSetCallbackCup = function (func) {
    this.state.callbackCup = func;
  };
  compSetCallbackLeague = function (func) {
    this.state.callbackLeague = func;
  };
  state = {
    type: "cup",
    competitionID: "b2",
    gameCallbackSetter: this.gameCallbackSetter.bind(this),
    changeNotif: this.changeNotif.bind(this),
    compSetCallbackLeague: this.compSetCallbackLeague.bind(this),
    compSetCallbackCup: this.compSetCallbackCup.bind(this)
  };

  render() {
    return (
      <div style={{backgroundColor: "#b8c3d6"}}>
        <Grid columns={2} stackable centered>
          <Grid.Row stretched width={10}>
            <LeagueList
              passFunc={this.state.compSetCallCompetition}
              notif={this.state.changeNotif}/>
          </Grid.Row>
          <Grid.Column stretched width={10}>
            {this.state.type === "league" ? (
              <SortedTable
                passFunc={this.state.compSetCallbackLeague}
                data={dataH[this.state.competitionID]}
              />
            ) : (
              <CupComp
                passFunc={this.state.compSetCallbackCup}
                data={dataH[this.state.competitionID]}
              />
            )}
            <SortedTable
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

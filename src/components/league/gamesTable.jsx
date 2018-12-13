import React, { Component } from "react";

class GamesTable extends Component {
  state = {};
  render() {
    return <SortedTable data={games} passFunc={() => {}} />;
  }
}

export default GamesTable;

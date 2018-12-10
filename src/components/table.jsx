import _ from "lodash";
import React, { Component } from "react";
import { Table } from "semantic-ui-react";

const tableData = [
  { name: "John", age: 15, gender: "Male" },
  { name: "Amber", age: 40, gender: "Female" },
  { name: "Leslie", age: 25, gender: "Female" },
  { name: "Ben", age: 70, gender: "Male" }
];
const data = {
  b1Data: [
    { Team: "w1", games: 2, Win: 1, Equal: 1, Lost: 1, Score: 1 },
    { Team: "w2", games: 2, Win: 1, Equal: 1, Lost: 1, Score: 11 },
    { Team: "w3", games: 2, Win: 1, Equal: 1, Lost: 1, Score: 12 },
    { Team: "w4", games: 2, Win: 1, Equal: 1, Lost: 1, Score: 13 },
    { Team: "w5", games: 2, Win: 1, Equal: 1, Lost: 1, Score: 14 },
    { Team: "w6", games: 2, Win: 1, Equal: 1, Lost: 1, Score: 15 },
    { Team: "w7", games: 2, Win: 1, Equal: 1, Lost: 1, Score: 16 },
    { Team: "w8", games: 2, Win: 1, Equal: 1, Lost: 1, Score: 16 },
    { Team: "w9", games: 2, Win: 1, Equal: 1, Lost: 1, Score: 12 }
  ],
  f1Data: [
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
const tableHeader = {
  basketball: [
    "Position",
    "Team",
    "games",
    "Win",
    "Equal",
    "Lost",
    "Score",
    "hi BB"
  ],
  football: [
    "Position",
    "Team",
    "games",
    "Win",
    "Equal",
    "Lost",
    "Score",
    "hi FT"
  ]
};
const chert = ["name", "age", "gender"];
export default class FlexTable extends Component {
  state = {
    column: null,
    data: this.props.data,
    header: this.props.header,
    direction: null
  };

  handleSort = clickedColumn => () => {
    const { column, data, direction } = this.state;
    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: "ascending"
      });
      return;
    }

    this.setState({
      data: data.reverse(),
      direction: direction === "ascending" ? "descending" : "ascending"
    });
  };

  render() {
    const { column, data, direction } = this.state;

    return (
      <Table sortable celled fixed>
        <Table.Header>
          <Table.Row>
            {this.state.header.map(a => (
              <Table.HeaderCell
                sorted={column === a ? direction : null}
                onClick={this.handleSort(a)}
              >
                {a}
              </Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {_.map(data, a => (
            <Table.Row>
              {Object.values(a).map(b => (
                <Table.Cell>{b}</Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  }
}

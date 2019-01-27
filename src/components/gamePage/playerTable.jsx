import React, { Component } from "react";
import RespTable from "../respTable";
import Status from "./status.jsx";
import { Table, Label, MenuItem, Segment } from "semantic-ui-react";
import SortedTable from "../sortedTable";

export default class PlayerTable extends Component {
  state = {
  };
  // bestPlayer = "asad  khafan";
  // playerInf = [
  //   {
  //     name: "ahmad aziz",
  //     playerNumber: "4",
  //     post: "goal keeper",
  //     changingTime: "---"
  //   },
  //   {
  //     name: "mamad google",
  //     playerNumber: "3",
  //     post: "forward",
  //     changingTime: "54"
  //   },
  //   {
  //     name: "asad  khafan",
  //     playerNumber: "6",
  //     post: "forward",
  //     changingTime: "78"
  //   },
  //   {
  //     name: "amir  oghab",
  //     playerNumber: "22",
  //     post: "attack",
  //     changingTime: "---"
  //   },
  //   {
  //     name: "ebi  dude",
  //     playerNumber: "33",
  //     post: "goal keeper",
  //     changingTime: "---"
  //   }
  // ];
  render() {
    return (
      <Segment inverted secondary>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>name</Table.HeaderCell>
              <Table.HeaderCell>post</Table.HeaderCell>
              <Table.HeaderCell>changingTime</Table.HeaderCell>
              <Table.HeaderCell>playTime</Table.HeaderCell>

            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.props.playerInfo.map(a => (
              <React.Fragment>
                {a.name === this.props.bestPlayer && (
                  <Label as="a" color="green" ribbon>
                    Best Player
                  </Label>
                )}
                <Table.Row>
                  {Object.values(a).map(b => (
                    <Table.Cell>{b}</Table.Cell>
                  ))}
                </Table.Row>
              </React.Fragment>
            ))}
          </Table.Body>
        </Table>
      </Segment>
    );
  }
}

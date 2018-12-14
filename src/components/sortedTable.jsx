import _ from "lodash";
import React, { Component } from "react";
import { Table } from "semantic-ui-react";
export default class SortedTable extends Component {
  handleUpdate = function() {
    this.setState({
      data: this.props.data,
      header: Object.keys(this.props.data[0])
    });
  };
  state = {
    column: null,
    direction: null,
    data: this.props.data,
    header: Object.keys(this.props.data[0]),
    handleUpdate: this.handleUpdate.bind(this)
  };
  componentDidMount() {
    this.props.passFunc(this.state.handleUpdate);
  }
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
    var { column, data, direction, header } = this.state;
    return (
      <Table sortable celled fixed selectable color="orange">
        <Table.Header>
          <Table.Row>
            {header.map(a => (
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

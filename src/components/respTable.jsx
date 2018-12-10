import React, { Component } from "react";

class RespTable extends Component {
  state = {
    data: this.props.data,
    header: this.props.header
  };
  render() {
    return (
      <table>
        <thead>
          <tr>
            {this.state.header.map(a => (
              <th scope="col">{a}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {this.state.data.map(a => (
            <tr>
              {Object.values(a).map((b, index) => (
                <td scope="row" data-label={this.state.header[index]}>
                  {b}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default RespTable;

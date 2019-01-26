import React, { Component } from "react";

class RespTable extends Component {
  state = {
    data: this.props.data,
    header: this.props.header
  };
  //
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
              {console.log(a)}

              {this.state.header.map(b => (
                <td scope="row" >
                  {console.log(a[b])}
                  {a[b]}
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

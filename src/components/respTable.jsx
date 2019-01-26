import React, { Component } from "react";

class RespTable extends Component {
  state = {
  };
  //
  render() {
    return (
      <table>
        <thead>
          <tr>
            {this.props.header.map(a => (
              <th scope="col">{a}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {this.props.data.map(a => (
            <tr>
              {console.log(a)}

              {this.props.header.map(b => (
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

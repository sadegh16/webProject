import React, { Component } from "react";
import RespTable from "../respTable";
import Status from "./status.jsx";

import { MenuItem, Segment } from "semantic-ui-react";

export default class Statistic extends Component {
  state = {};
  footballStatis = [
    { g1: 2, title: "goal scored", g2: 4 },
    { g1: "40%", title: "possession", g2: "60%" },
    { g1: "3(2)", title: "shots", g2: "29" },
    { g1: "7", title: "corner", g2: "11" }
  ];
  render() {
    return (
      <Segment inverted secondary>
        {this.footballStatis.map(a => (
          <Status g1={a.g1} g2={a.g2} title={a.title} />
        ))}
      </Segment>
    );
  }
}

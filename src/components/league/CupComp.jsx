import _ from "lodash";
import faker from "faker";
import { Link } from "react-router-dom";

import React, { Component } from "react";
import {
  Grid,
  Image,
  Menu,
  GridColumn,
  GridRow,
  Segment,
  MenuItem,
  Transition
} from "semantic-ui-react";
const teamData = {
  "1": faker.internet.avatar(),
  "2": faker.internet.avatar(),
  "3": faker.internet.avatar(),
  "4": faker.internet.avatar(),
  "5": faker.internet.avatar(),
  "6": faker.internet.avatar(),
  "7": faker.internet.avatar(),
  "8": faker.internet.avatar()
};

class CupComp extends Component {
  handleUpdate = function() {
    this.setState({
      title: this.props.data["title"],
      array: this.props.data["array"],
      sliceInf: this.props.data["inf"]
    });
  };
  state = {
    title: this.props.data["title"],
    array: this.props.data["array"],
    sliceInf: this.props.data["inf"],
    handleUpdate: this.handleUpdate.bind(this)
  };
  componentDidMount() {
    this.props.passFunc(this.state.handleUpdate);
  }
  render() {
    const { title, array, sliceInf } = this.state;

    return (
      <Grid columns="equal">
        <GridRow>
          <Menu fluid inverted widths={sliceInf.length}>
            {sliceInf.map((a, index) => (
              <MenuItem>{a["title"]}</MenuItem>
            ))}
          </Menu>
        </GridRow>
        {sliceInf.map(a => (
          <Grid.Column stretched>
            {array.slice(a["from"], a["to"]).map(b => (
              <Segment
                compact
                raised
                secondary
                textAlign="center"
                style={{
                  margin: "auto",
                  width: "50%",
                  border: "3px solid green",
                  padding: "10px"
                }}
              >
                <Transition secondary animation="scale" duration={500}>
                  <Link to="/teampage">
                    <Image
                      src={teamData[b]}
                      size="medium"
                      onHover={console.log("salam")}
                    />
                  </Link>
                </Transition>
              </Segment>
            ))}
          </Grid.Column>
        ))}
      </Grid>
    );
  }
}
export default CupComp;

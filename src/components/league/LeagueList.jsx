import React, { Component } from "react";
import {
  Menu,
  Input,
  Button,
  List,
  Grid,
  Label,
  GridRow,
  ButtonGroup,
  Segment
} from "semantic-ui-react";
import SearchStandard from "../search";
var groupBy = function(xs, key) {
  return xs.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

export default class LeagueList extends Component {
  createButtons = function(val) {
    const { activeField, notif, comptitions } = this.state;
    return comptitions.filter(
      a => a.field === activeField && a.current === val
    );
  };
  state = {
    createButtons: this.createButtons.bind(this),
    notif: this.props.notif,
    sportFields: Object.keys(groupBy(this.props.sports, "field")),
    comptitions: this.props.sports,
    activeField: "basketball"
  };

  handleItemClick = (e, { name }) => {
    this.setState({ activeField: name });
  };
  render() {
    const { activeField, notif, createButtons, sportFields } = this.state;
    return (
      <Grid>
        <GridRow stretched>
          <Menu pointing fluid secondary>
            {sportFields.map(s => (
              <Menu.Item
                name={s}
                active={activeField === s}
                onClick={this.handleItemClick}
              />
            ))}
            <Menu.Menu position="right">
              <Menu.Item>
                <SearchStandard
                  resultClick={res => notif(res.title, res.price.toLowerCase())}
                  input={{ icon: "search", iconPosition: "right" }}
                />
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </GridRow>
        <GridRow>
          <Segment>
            <Label as="a" color="green" ribbon>
              Current
            </Label>
            {createButtons(true).map(a => (
              <Button
                name={a.name}
                tp={a.type}
                onClick={(e, { name, tp }) => notif(name, tp)}
              >
                {a.name}
              </Button>
            ))}
          </Segment>
        </GridRow>
        <GridRow>
          <Segment>
            <Label as="a" color="orange" ribbon>
              Archive
            </Label>
            {createButtons(false).map(a => (
              <Button
                name={a.name}
                tp={a.type}
                onClick={(e, { name, tp }) => notif(name, tp)}
              >
                {a.name}
              </Button>
            ))}
          </Segment>
        </GridRow>
      </Grid>
    );
  }
}

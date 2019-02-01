import React, {Component} from "react";
import {
  Menu,
  Button,
  Grid,
  Label,
  GridRow,
  Segment
} from "semantic-ui-react";
import SearchStandard from "../search";
import axios from "axios";
import Constants from "../../lib/utils/ConstantData";

var groupBy = function (xs, key) {
  return xs.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};
const sports = [
  {name: "b1", current: true, type: "league", field: "basketball"},
  {name: "b2", current: false, type: "cup", field: "basketball"},
  {name: "b3", current: true, type: "league", field: "basketball"},
  {name: "f1", current: true, type: "league", field: "football"},
  {name: "f2", current: false, type: "cup", field: "football"},
  {name: "f3", current: false, type: "league", field: "football"}
];

export default class LeagueList extends Component {
  createButtons = function (val) {
    const {activeField, notif, comptitions} = this.state;
    return comptitions.filter(
      a => a.field === activeField && a.current === val
    );
  };
  state = {
    createButtons: this.createButtons.bind(this),
    notif: this.props.notif,
    sportFields: Object.keys(groupBy(sports, "field")),
    comptitions: sports,
    activeField: "basketball",
  };

  componentDidMount() {
    axios.get(Constants.host + 'competition/')
      .then(response => {
          const newData = Array.from(response.data.results, (data) => {
            return {
              id: data.id,
              name: data.name,
              current: data.current,
              type: data.type,
              field: data.field,
              image: data.image
            }
          })
          this.setState({
            sportFields: Object.keys(groupBy(newData, "field")),
            comptitions: newData,
          })
        }
      )


  }


  handleItemClick = (e, {name}) => {
    this.setState({activeField: name});
  };

  render() {
    const {activeField, notif, createButtons, sportFields} = this.state;
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
                  input={{icon: "search", iconPosition: "right"}}
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
                onClick={(e, {name, tp}) => notif(name, tp)}
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
                onClick={(e, {name, tp}) => notif(name, tp)}
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

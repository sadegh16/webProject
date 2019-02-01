import _ from "lodash";
import faker from "faker";
import React, {Component} from "react";
import {Search, Grid, Header, Segment} from "semantic-ui-react";
import axios from "axios";
import Constants from "../lib/utils/ConstantData";

var sourceh = [
  {
    title: "b1",
    description: faker.company.catchPhrase(),
    image: faker.internet.avatar(),
    price: "League"
  },
  {
    title: "b2",
    description: faker.company.catchPhrase(),
    image: faker.internet.avatar(),
    price: "Cup"
  },
  {
    title: "b3",
    description: faker.company.catchPhrase(),
    image: faker.internet.avatar(),
    price: "League"
  },
  {
    title: "f1",
    description: faker.company.catchPhrase(),
    image: faker.internet.avatar(),
    price: "League"
  },
  {
    title: "f2",
    description: faker.company.catchPhrase(),
    image: faker.internet.avatar(),
    price: "League"
  },
  {
    title: "f3",
    description: faker.company.catchPhrase(),
    image: faker.internet.avatar(),
    price: "Cup"
  }
];

export default class SearchStandard extends Component {
  state = {
    resultClick: this.props.resultClick,
    value: sourceh[0]
  };

  componentWillMount() {
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
          sourceh.push(newData)
        }
      )

    this.resetComponent();
  }

  resetComponent = () =>
    this.setState({isLoading: false, results: [], value: ""});

  handleResultSelect = (e, {result}) => {
    if (this.state.resultClick !== undefined) {
      this.state.resultClick(result);
    }
  };

  handleSearchChange = (e, {value}) => {
    this.setState({isLoading: true, value});

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent();

      const re = new RegExp(_.escapeRegExp(this.state.value), "i");
      const isMatch = result => re.test(result.title);

      this.setState({
        isLoading: false,
        results: _.filter(sourceh, isMatch)
      });
    }, 300);
  };

  render() {
    const {isLoading, value, results} = this.state;
    return (
      <Grid>
        <Grid.Column width={6}>
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true
            })}
            results={results}
            value={value}
            {...this.props}
          />
        </Grid.Column>
      </Grid>
    );
  }
}

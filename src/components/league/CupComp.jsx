import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
class CupComp extends Component {
  handleUpdate = function() {
    this.setState({
      title: this.props.data["title"],
      array: this.props.data["array"]
    });
  };
  state = {
    data: this.props.data,
    handleUpdate: this.handleUpdate.bind(this)
  };
  componentDidMount() {
    this.props.passFunc(this.state.handleUpdate);
  }
  render() {
    return (
      <div>
        <Grid />
      </div>
    );
  }
}
export default CupComp;

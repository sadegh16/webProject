import React, { Component } from "react";
import News from "./news";
import Games from "./games";

class MainPage extends Component {
  state = {};
  render() {

    return (
      <div>
        <News />
        <Games />
      </div>
    );
  }
}

export default MainPage;

import React, { Component } from "react";
import NewsField from "./newsField";
import "views/style.css";
//
class News extends Component {
  render() {
    return (
      <div>
        <h1 className="navbar navbar-light bg-light">News</h1>
        <NewsField field="football" />
        <NewsField field="basketball" />
      </div>
    );
  }
}

export default News;

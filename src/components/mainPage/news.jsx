import React, { Component } from "react";
import NewsField from "./newsField";
import "views/style.css";
//
class News extends Component {


  render() {
    var array = ["football", "basketball"];

    return (
      <div>
        <h1 className="navbar navbar-light bg-light">News</h1>
        {array.map(a => (
          <NewsField field={a} />
        ))}

      </div>
    );
  }
}
export default News;

import React, { Component } from "react";
import "views/style.css";

class Member extends Component {
  state = {
    // born:this.props.Born,
    // position:this.props.Position,
    // Squad:this.props.Squad,
    // PreviousClub:this.props.PreviousClub

    born: " sep 31, 1988",
    position: " striker",
    Squad: " 11",
    PreviousClub: " Badda"
  };
  render() {
    return (
      <div className="col-md-3 col-sm-6 col-xs-6">
        <div className="our-team">
          <img className="memPic" src={require("./salam.jpg")} />
          <div className="person-details">
            <div className="overly-bg" />
            <a href="">
              <h5 className="person-name">Masud Rana</h5>
            </a>
            <table className="person-info">
              <tbody>
                <tr>
                  <td>Born</td>
                  <td>{this.state.born}</td>
                </tr>
                <tr>
                  <td>Position</td>
                  <td>{this.state.position}</td>
                </tr>
                <tr>
                  <td>Squad number</td>
                  <td>{this.state.Squad}</td>
                </tr>
                <tr>
                  <td>Previous Club</td>
                  <td>{this.state.PreviousClub}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Member;

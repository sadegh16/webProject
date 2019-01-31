import React, { Component } from "react";
import "views/style.css";
import { Link } from "react-router-dom";
class Member extends Component {
  state = {
    name: this.props.name,
    born: this.props.born,
    position: this.props.position,
    Squad: this.props.squad,
    PreviousClub: this.props.previousClub,
    img:this.props.image,
  };
  render() {
    return (
      <div className="col-md-3 col-sm-6 col-xs-6">
        <div className="our-team">
          <img className="memPic" src={`http://localhost:8000/${this.state.img}`} />
          <div className="person-details">
            <div className="overly-bg" />
            <a href="">
              <Link to={`/playerPage/${this.props.id}`}>
                <h5 className="person-name">{this.state.name}</h5>
              </Link>
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

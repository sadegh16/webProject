import React, { Component } from "react";
import "views/style.css";
import { Link } from "react-router-dom";
import { Input, Button, Segment } from "semantic-ui-react";

class Game extends Component {
    render() {
        return (


            <Segment>
                <h1 class="new-title"> teams : {this.props.team1}  vs  {this.props.team1}</h1>
                <h3 class="new-tag">scores :{this.props.team1_score}  -  {this.props.team2_score}</h3>
                <h3 class="new-tag">points :{this.props.team1_point}  -  {this.props.team2_point}</h3>
                <h3 class="new-tag">date :{this.props.date}</h3>
            </Segment>

        );
    }
}

export default Game;

import React, { Component } from 'react';
import EventLine from "./eventLine";
import "views/style.css";
import RespTable from "../respTable";
import { Grid, Segment, Container } from "semantic-ui-react";

class BasketGame extends Component {
    state = { 
        statistic=[]
        
     }
    render() { 
        return ( 
            <RespTable header={}/>

         );
    }
}
 
export default BasketGame;
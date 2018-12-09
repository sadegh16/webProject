import React, { Component } from 'react';
import Member from './member';


class TeamPage extends Component {
    state = {  }
    render() { 
        return (
            <div className="our-team-section team-inner-page sec-spacer">
        <img  src={require("./team.jpg")} style={{width:"100%"}}/>
			    <br/>
                <br/>
                <br/>                

                <div className="container">
				    <div className="row">
					    <Member/>
					    <Member/>
					    <Member/>
					    <Member/>
					    <Member/>
					    <Member/>

                    </div>
                </div>
           </div> 
         
           
        );
    }
}
 
export default TeamPage;
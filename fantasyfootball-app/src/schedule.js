import React, { Component} from "react"
import styled from 'styled-components'


class Schedule extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            schedule: [],
            home: '',
            away:''
         }
    }
  
        
      
    componentDidMount() {
        fetch('https://api.sportsdata.io/v3/nfl/scores/json/Schedules/2019REG?key=20ee13fb6ee14c55960448ea7245cb54').then(response => {
            return response.json()
        }).then(res => {
            res.map(obj => this.setState({
                schedule: obj,
                home: obj.HomeTeam,
                away: obj.AwayTeam
            }))
        })
        .catch(err => console.error(err))
    }
    render() { 
        const button = styled.div`
        background-color: black;
        border-style: none;
        text-align: center;
        padding: 6px;
        border-radius: 20px;
        font-family: inherit`;
        let num = 0
        return ( 
            <div className="random">
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRnGep3lCZKGGQDMRRsgaHpjVZ-x7Rs9JaA0ojZIwqyXqfQGE4o'/>
                {this.state.home} vs {this.state.away}
                {console.log(this.state.schedule.AwayTeam)}
                <img src='https://sportsfly.cbsistatic.com/bundles/sportsmediacss/images/team-logos/nfl/light/SF.svg'/>
            </div>
         );
    }
}
 
export default Schedule;
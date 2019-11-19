import React, { Component} from "react"


class Player extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            random: []
         }
    }
    componentDidMount() {
        fetch('https://api.sportsdata.io/v3/nfl/stats/json/PlayerGameStatsByTeam/2019REG/2/DEN?key=20ee13fb6ee14c55960448ea7245cb54').then(response => {
            return response.json()
        }).then(res => {
            console.log(res)
           this.setState({
            random: res[0]
           }) 
        })
        .catch(err => console.error(err))
    }
    render() { 
        return ( 
            <div className="random">
               <div>{this.state.random.ShortName}</div> 
                <div>{this.state.random.Team}</div>
                <div>{this.state.random.Stadium}</div>
                <div>SoloTackles:{this.state.random.SoloTackles}</div>
                <div>{this.state.random.FantasyPostition}</div>
                <div>{this.state.random.opponent}</div>
                <div>tartgets:{this.state.random.ReceivingTargets}</div>
                <div>OffensiveSnapsPlayed:{this.state.random.OffensiveTeamSnaps}</div>
                <div>touchdowns:{this.state.random.OffensiveTouchdowns}</div>
                
            </div>
         )
    }
}
// FantasyPointsPPR: 24.7
// FantasyPointsYahoo: 20
// FantasyPosition: "WR" 
// OffensiveSnapsPlayed: 65
// OffensiveTeamSnaps: 70
// OffensiveTouchdowns: 0.7
// Opponent: "CHI"
// ReceivingTargets: 11.2
// ReceivingTouchdowns: 0.7
// ReceivingYards: 84.1
// ReceivingYardsPerReception: 6.6
// ReceivingYardsPerTarget: 5.5
// ReceptionPercentage: 72.6
// Receptions: 8.1
export default Player;
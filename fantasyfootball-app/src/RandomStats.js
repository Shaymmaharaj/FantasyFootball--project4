import React, { Component} from "react"


class RandomTeamStats extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            random: []
         }
    }
    componentDidMount() {
        fetch('https://api.sportsdata.io/v3/nfl/stats/json/PlayerSeasonStatsByTeam/2019REG/WAS?key=20ee13fb6ee14c55960448ea7245cb54').then(response => {
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
                <div>targets:{this.state.random.ReceivingTargets}</div>
                <div>OffensiveSnapsPlayed:{this.state.random.OffensiveTeamSnaps}</div>
                <div>touchdowns:{this.state.random.OffensiveTouchdowns}</div>
            </div>
         )
    }
}
 
export default RandomTeamStats;
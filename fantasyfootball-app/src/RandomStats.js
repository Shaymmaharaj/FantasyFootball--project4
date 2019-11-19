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
            random: res
           }) 
        })
        .catch(err => console.error(err))
    }
    render() { 
        return ( 
            <div className="random">
                {console.log(this.state.random)}
            </div>
         )
    }
}
 
export default RandomTeamStats;
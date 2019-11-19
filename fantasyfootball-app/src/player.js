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
                {console.log('hello')}
            </div>
         )
    }
}
 
export default Player;
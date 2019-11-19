import React, { Component} from "react"


class Schedule extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            random: []
         }
    }
    componentDidMount() {
        fetch('https://api.fantasydata.net/api/nfl/fantasy/json/Byes/{season}').then(response => {
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
 
export default Schedule;
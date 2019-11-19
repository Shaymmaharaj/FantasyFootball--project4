import React, { Component } from 'react';
import logo from './logo.svg';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Schedule from './schedule';
import player from './player'
import RandomTeamStats from './RandomStats'

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  clearStorage(){
    window.localStorage.clear();
  };
  render(){
    return (
      <div>
      <div>
        <nav>
          <Link to='/'>
            <img
              src='https://icon-library.net/images/nfl-icon/nfl-icon-8.jpg'
              className='icon'
            />
          </Link>
          <Link to='/schedule'>
            <h2>schedule</h2>
          </Link>
          {/* <Link to='/newuser'>
            <h2>New Palz</h2>
          </Link> */}
          <Link to='/player/stats'>
            <h2>player stats</h2>
          </Link>

          <Link to='/random/stats'>
            <h2>Random Team Stats</h2>
          </Link>
        </nav>

        {/* <div className="randobeer"><Random /></div> */}
      </div>
      <main>
        <Switch>
          {/* <Route exact path='/'  /> */}
          <Route path='/schedule' component={Schedule} />
          />
          
          <Route exact path='/player/stats' component={player} />
          <Route exact path='/random/stats' component={RandomTeamStats} />
          {/* <Route exact path="/show/posts/:uid?" component={Posts}/>
          <Route exact path="/newpost" component={New}/>
          <Route path="/showpost/:id" render={routerProps => <Showpost {...routerProps}/>}/>
          <Route exact path='/edit/:id' component={Showpost} />
          <Route exact path='/yeetrandom' component={Random} />
          <Route exact path='/newuser' component={NewUser} />
          <Route exact path="/category/:category" component={Category}/>
          <div className="userProfile">
          <Route path='/show/users' component={User} /></div> */}
        </Switch>
      </main>
    </div>

    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Schedule from './schedule';
import player from './player'
import RandomTeamStats from './RandomStats'
import styled from 'styled-components'

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
    const background = styled.header`
    color: #F0AC11;
    font-size: 20px;
    font-family: 'Rancho', cursive;
    margin: 0;
    `;
    return (
      <div>
        <header>Fantasy Football Stats</header>
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
        </Switch>
      </main>
    </div>

    );
  }
}

export default App;

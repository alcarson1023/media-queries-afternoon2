import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="container">
          <div className='header'>
            <div id='title'>TESTING</div>
            <div className='nav'>
              <div id='burger'><div class='f'/><div class='f'/><div class='f'/></div>
              <div className='nav2'>SERVICES</div>
              <div className='nav2'>PORTFOLIO</div>
              <div className='nav2'>ABOUT</div>
              <div className='nav2'>TEAM</div>
              <div className='nav2'>CONTACT</div>
            </div>
          </div>
          <div className='services'></div>
        </div>
      </div>
    );
  }
}

export default App;

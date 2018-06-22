
import React, { Component } from 'react';
import Countdown from './Countdown.js';



class App extends Component {
  render() {
    const currentDate = new Date();
    const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
    return (
      <div className="App">
        <div className="App-header">
        <img src={require('./Heading.png')} width={1200} height={100} />
        </div>
        <Countdown date={`${year}-12-24 00:00:00`}/>
      </div>
    );
  }
}

export default App;

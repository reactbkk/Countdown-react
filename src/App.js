import React, { Component } from 'react'
import Countdown from './Countdown.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={require('./Heading.png')} width={1200} height={100} />
        </div>
        <Countdown date={new Date(2018, 5, 23, 18, 30)} />
      </div>
    )
  }
}

export default App

import React, { Component } from 'react'
import Countdown from './Countdown.js'
import { database } from './firebase'
class App extends Component {
  state = {
    date: null
  }
  componentDidMount() {
    this.loadAndListenDate()
  }
  loadAndListenDate() {
    const countDownRef = database.ref('countdown-date')
    countDownRef.on('value', async snapshot => {
      const countdown = snapshot.val()
      if (!countdown) {
        const defaultDate = new Date()
        defaultDate.setMinutes(defaultDate.getMinutes() + 20)
        countDownRef.set(defaultDate.toISOString())
        return
      }
      this.setState({ date: countdown })
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={require('./Heading.png')} width={1200} height={100} />
        </div>
        {this.state.date && (
          <Countdown date={this.state.date} key={this.state.date} />
        )}
      </div>
    )
  }
}

export default App

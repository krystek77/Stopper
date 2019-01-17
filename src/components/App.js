import React, { Component } from 'react';
import Reset from './Reset';
import SwitchStopper from './SwitchStopper'
import Clock from './Clock'
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      time:0,
      active:false
    }
    this.clearStopper=""
  }

  updateTime(){
    this.setState(()=>({
      time: this.state.time+1
    }))
  }

  handleOnOffStopper(){
    this.setState((prevState)=>({
      active:!prevState.active
    }))
    if(this.state.active){
      console.log("Turn off stopper")
      clearInterval(this.clearStopper)
    } else {
      console.log("Turn on stopper")
      this.clearStopper=setInterval(this.updateTime.bind(this),1000)
    }
  }

  handleResetStopper=()=>{
    console.log(`Reset stopper to 0 and clear countdown up `)
    this.setState({
      time:0,
      active:false
    })
    clearInterval(this.clearStopper)
  }

  render() {
    const {time,active} = this.state
    return (
      <div className="App">
        <h1>Stopper</h1>
        <Clock time={time}/>
        <SwitchStopper 
          onOff = {this.handleOnOffStopper.bind(this)} 
          active = {active}/>
        <Reset resetStopper={this.handleResetStopper}/>
      </div>
    )
  }
}

export default App

import React, { Component } from 'react';
import Clock from 'clock';
import Controls from 'controls';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      countdownStatus: 'stopped'
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if(this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({count: 0});
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
        default:

      }
    }
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = undefined;
  }
  handleStatusChange(newStatus) {
    this.setState({countdownStatus: newStatus});
  }
  startTimer() {
    this.timer = setInterval(() => {
      var newCount = this.state.count + 1;
      this.setState({
        count: newCount
      });
    }, 1000);
  }
  render() {
    var { count, countdownStatus } = this.state;

    return (
      <div>
        <h1 className="page-title">Timer App</h1>
        <Clock totalSeconds={count}/>
        <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange.bind(this)}/>
      </div>
    );
  }
}

export default Timer;

import React, { Component } from 'react';
import Clock from 'clock';

class Countdown extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <Clock totalSeconds={129}/>
      </div>
    );
  }
}

export default Countdown;

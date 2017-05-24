import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">React Timer App</li>
          <li><IndexLink activeClassName='active-link' to='/'>Timer</IndexLink></li>
          <li><Link activeClassName='active-link' to='/countdown'>Countdown</Link></li>
        </ul>
      </div>
      <div className="top-bar-right">
        <p className="created-by">Created by <a href="https://github.com/Complugg3d" target="_blank">Erick</a></p>
      </div>
    </div>);
  }
}

export default Nav;

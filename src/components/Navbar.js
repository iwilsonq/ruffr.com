import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar-wrapper">
        <nav className="navbar">
          <div className="navbar-brand">Ruffr</div>
          <ul>
            <li className="nav-link"><a href="">Explore</a></li>
            <li className="nav-link"><a href="">Alerts</a></li>
            <li className="nav-link"><a href="">Profile</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

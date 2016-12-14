import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar-wrapper">
        <nav className="navbar">
          <div className="navbar-brand">Ruffr</div>
          <ul>
            <li className="nav-link"><Link to='/new'>New Post</Link></li>
            <li className="nav-link"><Link to='/'>Alerts</Link></li>
            <li className="nav-link"><Link to='/profile'>Profile</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}

import React, { Component } from 'react';
import Navbar from './components/Navbar'
import '../styles/style.sass';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        {this.props.children}
      </div>
    );
  }
}

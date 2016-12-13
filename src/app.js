import React, { Component } from 'react';
import PetsContainer from './components/PetsContainer';
import Navbar from './components/Navbar'
import '../styles/style.sass';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <PetsContainer />
      </div>
    );
  }
}

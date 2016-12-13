import React from 'react';
import { render } from 'react-dom';
import App from './app';

console.log('death');

render(
  <App />,
  document.getElementById('react-root')
);

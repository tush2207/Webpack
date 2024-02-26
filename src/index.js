import React from 'react';
import { render } from 'react-dom';
import './style.css';

const App = () => {
  return (
    <div>
      <h1>webpack Configuration</h1>
      <div id='image'></div>
    </div>
  );
};

render(<App />, document.getElementById('target'));

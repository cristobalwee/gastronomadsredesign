import React, { Component } from 'react';
import './index.scss';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Landing from './pages/landing.jsx';
import About from './pages/about.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={ Landing }/>
          <Route path="/about" component={ About }/>
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './index.scss';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Landing from './pages/landing.jsx';
import About from './pages/about.jsx';
import Navigation from './components/navigation.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Route exact path="/" component={ Landing }/>
          <Route path="/about" component={ About }/>
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Landing extends Component {
  render() {
    return (
      <div id="landing">
        <Link to="/about">about</Link>
      </div>
    );
  }
}

export default Landing;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
  render() {
    return (
      <div id="about" className="page">
        About page
        <Link to="/">Back</Link>
      </div>
    );
  }
}

export default About;

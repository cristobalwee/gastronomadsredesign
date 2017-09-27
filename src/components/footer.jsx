import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div>

        </div>
        <div className="center">
          <p>&copy; Gastronomads 2017</p>
        </div>
        <div>
          <Link to="/about">About</Link>
        </div>
      </div>
    );
  }
}

export default Footer;

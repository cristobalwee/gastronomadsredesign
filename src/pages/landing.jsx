import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Button from '../components/button.jsx';
import ArticleCard from '../components/articlecard.jsx';

class Landing extends Component {
  render() {
    return (
      <div id="landing" className="page">
        <div className="hero">
          <div className="title">
            <h1>Barra Lima</h1>
            <p>Los sabores de mi lindo Perú en un plato que produce más que una
              incógnita sonrisa directo del corazón. A pictoresque rendition of
              Peru's delicious secrets. Thank you Cosme in Lima, Perú</p>
            <Link to="/about"><Button type="light" /></Link>
          </div>
        </div>
        <ArticleCard />
      </div>
    );
  }
}

export default Landing;

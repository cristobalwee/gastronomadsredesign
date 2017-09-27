import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Button from '../components/button.jsx';
import ArticleCard from '../components/articlecard.jsx';
import Footer from '../components/footer.jsx';

class Landing extends Component {
  render() {
    return (
      <div id="landing" className="page">
        <div className="hero">
          <div className="overlay-wrapper">
            <div className="overlay"></div>
          </div>
          <div className="title">
            <h1>Barra Lima</h1>
            <p>Los sabores de mi lindo Perú en un plato que produce más que una
              incógnita sonrisa directo del corazón. A pictoresque rendition of
              Peru's delicious secrets. Thank you Cosme in Lima, Perú</p>
            <Link to="/about"><Button type="light" /></Link>
          </div>
        </div>
        <div className="article-list">
          {/*<ArticleCard
            title="Barra Lima"
            description="Everything about this place was different and unexpected.
              The small space was well lit and greatly welcoming, a sense of familiarity
              filled the air with confidence and allure. The delicate fragrance of the
              ocean aromatized the restaurant and spoke to the freshness handled in the
              open kitchen-bar. A stone countertop delineates the central concept of
              Chef John Evans\u2019s new and youthful proposal: Barra Lima is an ode to
              the sea and the earth, a tantalizing yin-yang of flavors, colors, and aromas."
            img="https://res.cloudinary.com/gastronomads/image/upload/v1491486036/BarraLima2_xrdrkq.jpg"
            location="Lima, Peru"
            rating={4} />*/}
        </div>
      </div>
    );
  }
}

export default Landing;

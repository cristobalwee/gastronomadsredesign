import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Rating from './rating.jsx';
import Pin from '../media/icon_pin.svg';

function ArticleCard(props) {
  return (
    <Link to={"/articles/" + props.url}>
      <div className="article">
        <div className="img" style={{backgroundImage: "url(" + props.img + ")"}}>
          <div className="article-overlay">
            <div id="read-more">Read More</div>
          </div>
        </div>
        <h2>{props.title}</h2>
        <p>{props.description.length > 150 ? props.description.substr(0, 145) + "..." : props.description}</p>
        <div className="article-info clearfix">
          <span className="inline location left"><img alt="pin" src={Pin}></img><h4 className="inline">{props.location}</h4></span>
          <span className="inline right"><Rating rating={props.rating}/></span>
        </div>
      </div>
    </Link>
  );
}

ArticleCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
  location: PropTypes.string,
  rating: PropTypes.number
};

export default ArticleCard;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import StarEmpty from '../media/star_empty.svg';
import StarHalf from '../media/star_half.svg';
import StarFull from '../media/star_full.svg';

function Rating({rating}) {
  const gastro_rating = rating;
  let imgArr = [];

  if (Number.isInteger(gastro_rating)) {
    for (var i = 0; i < gastro_rating; i++) {
      imgArr.push(1);
    }
    for (var i = 0; i < 6 - gastro_rating; i++) {
      imgArr.push(0);
    }
  }
  else {
    for (var i = 0; i < gastro_rating - 0.5; i++) {
      imgArr.push(1);
    }
    imgArr.push(0.5);
    for (var i = 0; i < 6 - (gastro_rating + 0.5); i++) {
      imgArr.push(0);
    }
  }
  return (
    <span className="rating-stars">
      {imgArr.map((image, i) => {
        switch(image) {
          case 0:
            return <img key={i} src={StarEmpty}></img>
          case 0.5:
            return <img key={i} src={StarHalf}></img>
          case 1:
            return <img key={i} src={StarFull}></img>
          default:
            return <img key={i} src={StarEmpty}></img>
        }
      })}
    </span>
  );
}

Rating.propTypes = {
  rating: PropTypes.number
};

export default Rating;

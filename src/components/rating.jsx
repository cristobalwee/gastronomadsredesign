import React from 'react';
import PropTypes from 'prop-types';

import StarEmpty from '../media/star_empty.svg';
import StarHalf from '../media/star_half.svg';
import StarFull from '../media/star_full.svg';

function Rating({rating}) {
  const gastro_rating = rating;
  let imgArr = [];

  if (Number.isInteger(gastro_rating)) {
    for (let i = 0; i < gastro_rating; i++) {
      imgArr.push(1);
    }
    for (let i = 0; i < 6 - gastro_rating; i++) {
      imgArr.push(0);
    }
  }
  else {
    for (let i = 0; i < gastro_rating - 0.5; i++) {
      imgArr.push(1);
    }
    imgArr.push(0.5);
    for (let i = 0; i < 6 - (gastro_rating + 0.5); i++) {
      imgArr.push(0);
    }
  }
  return (
    <span className="rating-stars">
      {imgArr.map((image, i) => {
        switch(image) {
          case 0:
            return <img alt="star" key={i} src={StarEmpty}></img>
          case 0.5:
            return <img alt="star" key={i} src={StarHalf}></img>
          case 1:
            return <img alt="star" key={i} src={StarFull}></img>
          default:
            return <img alt="star" key={i} src={StarEmpty}></img>
        }
      })}
    </span>
  );
}

Rating.propTypes = {
  rating: PropTypes.number
};

export default Rating;

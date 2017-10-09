import React from 'react';
import PropTypes from 'prop-types';

function Button({ type, copy }) {
  return (
    <div className={"button " + type}>
      <div className="button-front"></div>
      <div className="button-back">
        <p>{copy}</p>
      </div>
    </div>
  );
};

Button.propTypes = {
  type: PropTypes.string
};

export default Button;

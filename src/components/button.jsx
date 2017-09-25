import React, { Component, PropTypes } from 'react';

function Button({ type }) {
  return (
    <div className={"button " + type}>
      <div className="button-front"></div>
      <div className="button-back">
        <p>Read more</p>
      </div>
    </div>
  );
};

Button.propTypes = {
  type: PropTypes.string
};

export default Button;

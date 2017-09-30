import React, { Component } from 'react';

import Icon from '../media/icon_black.svg';

class Loader extends Component {
  constructor() {
    super();
    this.state = {
      loaded: 0
    }
  }

  componentDidMount() {
    let loadInterval = setInterval(() => {
      let temp = this.state.loaded;
      this.setState({loaded: ++temp});
      if (this.state.loaded >= 100) {
        clearInterval(loadInterval);
      }
    }, Math.floor(Math.random() * 150));
  }

  render() {
    return (
      <div className="loader page">
        <div className="content">
          <img alt="icon" src={Icon} />
          <h1>{this.state.loaded}%</h1>
        </div>
      </div>
    );
  }
}

export default Loader;

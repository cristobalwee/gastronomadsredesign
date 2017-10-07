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
    setTimeout(() => {
      const loader = document.getElementsByClassName("loader")[0];
      const progress = document.getElementsByClassName("progress-bar-inner")[0];
      progress.style.animation = "none";
      loader.style.left = "-100%";
    }, 2000 + Math.random() * 500);
    // let loadInterval = setInterval(() => {
    //   let temp = this.state.loaded;
    //   this.setState({loaded: ++temp});
    //   if (this.state.loaded >= 100) {
    //     clearInterval(loadInterval);
    //   }
    // }, Math.floor(Math.random() * 150));
  }

  render() {
    return (
      <div className="loader">
        <div className="content">
          <img alt="icon" src={Icon} />
          <div className="progress-bar">
            <div className="progress-bar-inner"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Loader;

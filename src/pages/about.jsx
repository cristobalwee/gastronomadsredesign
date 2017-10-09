import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Fb from '../media/facebook_alt.svg';
import Linkedin from '../media/linkedin_white.svg';
import Gh from '../media/github_white.svg';
import Founder from '../media/founder.png';
import Dev from '../media/developer.png';

class About extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  render() {
    return (
      <div id="about" className="page">
        <div id="about-left">
          <div className="content">
            <h1>Marcelo</h1>
            <p>Food Critic + Founder</p>
            <a href="https://www.facebook.com/marce1000" target="_blank"><img alt="Facebook" src={Fb}></img></a>
            <a href="https://www.linkedin.com/in/marcelograna/" target="_blank"><img alt="LinkedIn" src={Linkedin}></img></a>
          </div>
        </div>
        <div id="about-right">
          <div className="content">
            <h1>Cristobal</h1>
            <p>Designer + Developer</p>
            <a href="https://www.facebook.com/cristobal.granasamanez" target="_blank"><img alt="Facebook" src={Fb}></img></a>
            <a href="https://github.com/cristobalwee" target="_blank"><img alt="Github" src={Gh}></img></a>
          </div>
        </div>
      </div>
    );
  }
}

export default About;

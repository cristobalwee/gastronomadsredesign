import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../media/logo.svg';
import Menu from '../media/menu.svg';
import Search from '../media/search.svg';
import Icon from '../media/icon_white.svg';
import Fb from '../media/Facebook_White.svg';
import Ig from '../media/Instagram_White.svg';
import Close from '../media/close_icon.svg';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  forceFocus() {
    document.getElementById("search").focus();
  }

  open() {
    if (!this.state.open) {
      //this.disableScroll();
      const overlay = document.getElementsByClassName("nav-overlay")[0];
      overlay.style.display = "block";
      overlay.style.opacity = "1";
      this.setState({open: true});
    }
  }

  close() {
    if (this.state.open) {
      //this.enableScroll();
      const overlay = document.getElementsByClassName("nav-overlay")[0];
      overlay.style.transform = "translateY(-100%)";
      setTimeout(() => {
        overlay.style.display = "none";
      }, 500);
      this.setState({open: false});
    }
  }

  handleKeyPress(event) {
    if(event.key === 'Enter') {
      console.log("entered");
      let searchText = document.getElementById("search").value;
      window.location.assign('/articles?search=' + searchText);
    }
  }

  render() {
    return (
      <div>
        <div className="nav-bar">
          <div>
            <img alt="menu" onClick={this.open.bind(this)} src={Menu} />
          </div>
          <div className="center">
            <Link to="/"><img alt="logo" src={Logo} /></Link>
          </div>
          <div>
            <img alt="search" onClick={this.forceFocus.bind(this)} src={Search} />
            <input id="search" type="text" onKeyPress={this.handleKeyPress} placeholder="Search"></input>
          </div>
        </div>
        <div className="nav-overlay">
          <img alt="close" onClick={this.close.bind(this)} className="close" src={Close} />
          <div className="content">
            <img alt="icon" className="icon" src={Icon} />
            <Link onClick={this.close.bind(this)} to="/articles"><h1>Articles</h1></Link>
            <Link onClick={this.close.bind(this)} to="/about"><h1>About</h1></Link>
            <Link onClick={this.close.bind(this)} to="/criteria"><h1>Criteria</h1></Link>
            <a href="mailto:editorial@gastronomads.co"><h1>Contact</h1></a>
            <div className="social">
              <a href="https://www.facebook.com/gastronomadsofficial/" target="_blank" rel="noopener noreferrer">
                <img alt="facebook" src={Fb} className="inline"></img>
              </a>
              <a href="https://www.instagram.com/gastronomadsofficial/" target="_blank" rel="noopener noreferrer">
                <img alt="instagram" src={Ig} className="inline"></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;

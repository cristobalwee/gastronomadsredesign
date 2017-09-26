import React, { Component } from 'react';
import Logo from '../media/logo.svg';
import Menu from '../media/menu.svg';
import Search from '../media/search.svg';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Navigation extends Component {
  render() {
    function forceFocus() {
      document.getElementById("search").focus();
    }

    return (
      <div className="nav-bar">
        <div>
          <img src={Menu} />
          </div>
        <div className="center">
          <img src={Logo} />
          </div>
        <div>
          <img onClick={forceFocus} src={Search} />
          <input id="search" type="text" placeholder="Search"></input>
        </div>
      </div>
    );
  }
}

export default Navigation;

import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Header.scss';

class Header extends Component {
  showCurrentYear() {
    return new Date().getFullYear();
  }
  render() {
    const { onClick, pageDescription } = this.props
    return (
      <div className="header-container">
        <div className="header-contents">
          <div className="name"><a href="/">Taylor Zanke</a></div>
          <div className="what">{pageDescription}</div>
          <div className="menu-toggler" onClick={onClick}>Site Map</div>
        </div>
      </div>
    );
  }
}

export default Header;

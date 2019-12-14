import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Header.scss';

class Header extends Component {
  showCurrentYear() {
    return new Date().getFullYear();
  }
  render() {
    const { onClick, contextDescription } = this.props
    return (
      <div className="header-container">
        <div className="header-contents">
          <div className="name"><a href="/">Taylor Zanke</a></div>
          <div className="what">{contextDescription}</div>
          <div className="menu-toggler" onClick={onClick}>Information</div>
        </div>
      </div>
    );
  }
}

export default Header;

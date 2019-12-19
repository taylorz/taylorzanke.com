import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Header.scss';

class Header extends Component {
  showCurrentYear() {
    return new Date().getFullYear();
  }
  render() {
    const { onClick, context, contextLink, what, toggler } = this.props
    return (
      <div className="header-container">
        <div className="header-contents">
          <div className="header-item name"><a href={contextLink}>{context}</a></div>
          <div className="header-item what">{what}</div>
          <div className="header-item menu-toggler" onClick={onClick}>{toggler}</div>
        </div>
      </div>
    );
  }
}

export default Header;

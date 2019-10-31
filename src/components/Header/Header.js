import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Header.scss';

class Header extends Component {
  showCurrentYear() {
    return new Date().getFullYear();
  }
  render() {
    const { onClick } = this.props
    return (
      <Grid item xs={12} className="header-container">
        <div className="header-contents">
          <div className="name">&copy; {this.showCurrentYear()}</div>
          <div className="menu-toggler" onClick={onClick}>ABOUT</div>
        </div>
      </Grid>
    );
  }
}

export default Header;

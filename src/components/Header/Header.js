import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Header.scss';

class Header extends Component {
  render() {
    const { onClick, context, close, linkName, link, light } = this.props
    return (
      <div className={`header-container ${light && "light"}`}>
        <Grid container className="header-contents">
          <div><a href="/">Taylor Zanke</a></div>
          <a href={link}>{linkName}</a>
        </Grid>
      </div>
    );
  }
}

export default Header;

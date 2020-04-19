import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Header.scss';

class Header extends Component {
  render() {
    const { onClick, context, close, contextLink, workDetail, light } = this.props
    return (
      <div className={`header-container ${light && "light"}`}>
        <Grid container className="header-contents"></Grid>
      </div>
    );
  }
}

export default Header;

import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Menu.scss'

class Menu extends Component {
  render() {
    const { children, className } = this.props
    return (
        <Grid container className={`menu ${className}`}>
          <Grid item md={12} className="menu-about">
            Taylor Zanke is an artist and designer who makes drawings, models, books, spreadsheets, and photographs.
          </Grid>
          <Grid item md={10} className="menu-description">
            This website is a collection of works and fragments waiting to be assembled or taken apart.
          </Grid>
        </Grid>
    );
  }
}

export default Menu;

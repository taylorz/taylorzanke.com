import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Menu.scss';

class Menu extends Component {
  render() {
    const { className } = this.props
    return (
        <Grid item lg={4} md={12} className={`menu ${className}`}>
          <div className="menu-headline">
            Taylor Zanke is an artist and designer who makes drawings, models, books, photographs, and recordings. He strives to understand the ways in which space travels through time and our role within it.
          </div>
          <div className="menu-description">
            <p>This website is a collection of works (ABC) and fragments (123) waiting to be assembled or taken apart.</p>
          </div>
        </Grid>
    );
  }
}

export default Menu;

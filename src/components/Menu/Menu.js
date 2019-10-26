import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Menu.scss'

class Menu extends Component {
  render() {
    const { children, className } = this.props
    return (
        <Grid item lg={4} md={12} className={`menu ${className}`}>
          <div className="menu-about">
            Taylor Zanke is an artist who makes books, models, drawings, documents, and photographs, among other media. He strives to understand the languages used in the Present to discuss the Future and the Past, and in so doing develop the perspective to realize alternative compositional and existential realities.
          </div>
          <div className="menu-description">
            This website is a collection of works (ABC) and fragments (123) waiting to be assembled or taken apart.
          </div>
        </Grid>
    );
  }
}

export default Menu;

import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './PageContainer.scss'

class PageContainer extends Component {
  render() {
    const { children, className, onClick } = this.props
    return (
      <Grid item xs={12} className={`page-container ${className}`} onClick={onClick}>
        <div className="menu-dark-overlay">
          <Grid container className="overlay-content">
            <Grid item xs={6} className="overlay-text">Taylor Zanke is an artist and designer based in New York City. He seeks to uncover the ways in which space travels through time, revealing potential, dismantling inevitability.</Grid>
          </Grid>
        </div>
        {children}
      </Grid>
    );
  }
}

export default PageContainer;

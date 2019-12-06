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
            <Grid item xs={6} className="overlay-text">It is 5:39 PM in Brooklyn, NY.</Grid>
          </Grid>
        </div>
        {children}
      </Grid>
    );
  }
}

export default PageContainer;

import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './PageContainer.scss'

class PageContainer extends Component {
  render() {
    const { children, className } = this.props
    return (
      <Grid item lg={8} md={12} className={`page-container ${className}`}>
        {children}
      </Grid>
    );
  }
}

export default PageContainer;

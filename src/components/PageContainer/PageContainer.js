import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './PageContainer.scss'

import Header from '../Header/Header'

class PageContainer extends Component {
  render() {
    const { children, className, onClick } = this.props
    return (
      <Grid item lg={8} md={12} className={`page-container ${className}`} onClick={onClick}>
        <Header onClick={onClick}/>
        {children}
      </Grid>
    );
  }
}

export default PageContainer;

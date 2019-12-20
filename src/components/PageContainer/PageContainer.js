import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Footer from '../../components/Footer/Footer';

import './PageContainer.scss'

class PageContainer extends Component {
  render() {
    const { children, className, onClick } = this.props
    return (
      <Grid item xs={12} className={`page-container ${className}`} onClick={onClick}>
        {children}
        <Footer/>
      </Grid>
    );
  }
}

export default PageContainer;

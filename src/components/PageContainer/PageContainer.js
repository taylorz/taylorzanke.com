import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './PageContainer.scss'

class PageContainer extends Component {
  render() {
    const { children, className } = this.props
    return (
      <div className={`page-container ${className}`}>
        {children}
      </div>
    );
  }
}

export default PageContainer;

import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import './PageContent.scss'

class PageContent extends Component {
  render() {
    const { children, className, onClick } = this.props
    return (
      <div className="page-content-wrapper">
        {children}
      </div>
    );
  }
}

export default PageContent;

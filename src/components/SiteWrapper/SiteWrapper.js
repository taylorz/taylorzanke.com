import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './SiteWrapper.scss'

class SiteWrapper extends Component {
  render() {
    const { children, className } = this.props
    return (
      <div className={`site-wrapper ${className}`}>
        {children}
      </div>
    );
  }
}

export default SiteWrapper;

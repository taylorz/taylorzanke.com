import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './WorksGrid.scss'

class WorksGrid extends Component {
  render() {
    const { className, children } = this.props
    return (
      <Grid container className={`works-grid ${className}`}>
        {children}
      </Grid>
    );
  }
}

export default WorksGrid;

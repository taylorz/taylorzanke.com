import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Whole.scss'

import Caption from '../Caption/Caption'

class Whole extends Component {
  render() {
    const { className, workImage, title, year, object, dimension } = this.props
    return (
      <>
        <Grid container className={`whole ${className}`} justify="center" alignItems="center">
          <Grid item md={8} className="whole-image-container" style={{backgroundImage: `url(${workImage})`}}></Grid>
        </Grid>
        <Caption title={title} year={year} object={object} dimension={dimension}/>
      </>
    );
  }
}

export default Whole;

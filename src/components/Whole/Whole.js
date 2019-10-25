import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Whole.scss'

import Caption from '../Caption/Caption'

class Whole extends Component {
  render() {
    const { className, workImage, matte, full, light, dark} = this.props
    return (
      <>
        <Grid container className={`whole ${className} ${matte && "matte"} ${full && "full"} ${light && "light"} ${dark && "dark"}`} justify={`${matte ? "center" : "flex-end"}`} alignItems="center">
          <Grid item md={matte ? 12 : 10} className="whole-image-container" style={{backgroundImage: `url(${workImage})`}}></Grid>
        </Grid>
      </>
    );
  }
}

export default Whole;

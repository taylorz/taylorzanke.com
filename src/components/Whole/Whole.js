import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Whole.scss'

import WorkId from '../WorkId/WorkId'
import Caption from '../Caption/Caption'

class Whole extends Component {
  render() {
    const { className, onClick, workTitle, workYear, workObject, workDims, workDetails, workImage, workId, matte, full, light, dark} = this.props
    return (
      <>
        <Grid container className={`whole ${className} ${matte && "matte"} ${full && "full"} ${light && "light"} ${dark && "dark"}`} justify={`${matte ? "center" : "flex-end"}`} alignItems="center">
          <WorkId workId={[workId]} onClick={onClick}/>
          <Grid item md={matte ? 12 : 10} className="whole-image-container" style={{backgroundImage: `url(${workImage})`}}>
            {full && <Caption title={workTitle} year={workYear} object={workObject} dimension={workDims} details={workDetails}/>}
          </Grid>
          {matte && <Caption title={workTitle} year={workYear} object={workObject} dimension={workDims} details={workDetails}/>}
        </Grid>
      </>
    );
  }
}

export default Whole;

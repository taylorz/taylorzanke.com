import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Work.scss'

import WorkId from '../WorkId/WorkId'
import Caption from '../Caption/Caption'

class Work extends Component {
  render() {
    const { className, onClick, workTitle, workYear, workObject, workDims, workDetails, workImage, workId, matte, full, hasCaption, light, dark} = this.props
    return (
      <>
        <Grid container className={`Work ${className} ${matte && "matte"} ${full && "full"} ${light && "light"} ${dark && "dark"}`} justify={`${matte ? "center" : "flex-end"}`} alignItems="center">

          <Grid item md={12} className="Work-image-container" style={{backgroundImage: `url(${workImage})`}}>
            {full && hasCaption && <Caption title={workTitle} year={workYear} object={workObject} dimension={workDims} details={workDetails}/>}
          </Grid>
          {matte && hasCaption && <Caption title={workTitle} year={workYear} object={workObject} dimension={workDims} details={workDetails}/>}
        </Grid>
      </>
    );
  }
}

export default Work;

import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import './Work.scss'

import WorkId from '../WorkId/WorkId'
import Caption from '../Caption/Caption'

class Work extends Component {
  render() {
    const { className, onClick, workTitle, workYear, workObject, workDims, workDetails, workImage, workId, workLink, matte, full, hasCaption, light, dark} = this.props
    return (
      <>
      {workLink ?
        <Link to={workLink}>
        <Grid container className={`work ${className} ${matte && "matte"} ${full && "full"} ${light && "light"} ${dark && "dark"}`} justify={`${matte ? "center" : "flex-end"}`} alignItems="center">
            <Grid item md={12} className="work-image-container">
            <img className="work-image" src={workImage}/>
              {full && hasCaption && <Caption title={workTitle} year={workYear} object={workObject} dimension={workDims} details={workDetails}/>}
              {matte && hasCaption && <Caption title={workTitle} year={workYear} object={workObject} dimension={workDims} details={workDetails}/>}
            </Grid>
        </Grid>
        </Link>
        : (
          <Grid container className={`work ${className} ${matte && "matte"} ${full && "full"} ${light && "light"} ${dark && "dark"}`} justify={`${matte ? "center" : "flex-end"}`} alignItems="center">
              <Grid item md={12} className="work-image-container">
              <img className="work-image" src={workImage}/>
                {full && hasCaption && <Caption title={workTitle} year={workYear} object={workObject} dimension={workDims} details={workDetails}/>}
                {matte && hasCaption && <Caption title={workTitle} year={workYear} object={workObject} dimension={workDims} details={workDetails}/>}
              </Grid>
          </Grid>
        )
      }
      </>
    );
  }
}

export default Work;

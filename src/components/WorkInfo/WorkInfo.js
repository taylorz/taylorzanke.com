import React from 'react';
import Grid from '@material-ui/core/Grid';
import './WorkInfo.scss';

const WorkInfo = ({ className, work }) => (
  <Grid container className={`work-info ${className}`}>
    <Grid item xs={12} className="info-string">
      {/* <span className="name">{work.name}</span>  */}
      <span className="type">{work.type}. </span>
      <span className="dimensions">{work.dimensions}. </span>
      <span className="page-count">{work.pageCount}. </span>
      <span className="production-information">
          {work.productionInformation}. 
          {work.textStock && " Text Stock: " + work.textStock + ". "} 
          {work.coverStock && "Cover Stock: " + work.coverStock + ". "} 
      </span>
      <span className="year">({work.year})</span>
    </Grid>
  </Grid>
)

export default WorkInfo
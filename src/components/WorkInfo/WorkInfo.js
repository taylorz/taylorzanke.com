import React from 'react';
import Grid from '@material-ui/core/Grid';
import './WorkInfo.scss';

const WorkInfo = ({ className, work }) => (
  <Grid container className={`work-info ${className}`}>
    <Grid item xs={12}>
<span className="name">{work.name}</span> {work.type}. {work.dimensions}. {work.pageCount}. <span className="information">{work.productionInformation}.</span> 
    </Grid>
  </Grid>
)

export default WorkInfo
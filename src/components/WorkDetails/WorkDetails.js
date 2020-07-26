import React from 'react';
import Grid from '@material-ui/core/Grid';
import WorkInfo from '../WorkInfo/WorkInfo'
import './WorkDetails.scss';

const WorkDetails = ({ work }) => (
    <Grid container className="work-details">
        <Grid item xs={2} className="work-detail-item work-year">{work.year}</Grid>
        <Grid item  xs={2} className="work-detail-item work-id">{work.id}</Grid>
        <Grid item xs={8} className="work-detail-item work-name">
        {work.name}
        <Grid container className="work-info-item active-work-info">
            <Grid item><WorkInfo work={work}/></Grid>
        </Grid>
        </Grid>
    </Grid>
)

export default WorkDetails
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './WorkImage.scss';

const WorkImage = ({ image }) => (
    <Grid container className="work-image">
        <Grid item xs={12}>
            <img src={image}/>
        </Grid>
    </Grid>
)

export default WorkImage
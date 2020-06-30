import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './WorkImage.scss';

const WorkImage = ({ image }) => (
    <Grid container className="work-image">
        <Grid item container className="image-block" xs={12} alignItems="center" justify="center">
            <img src={image}/>
        </Grid>
    </Grid>
)

export default WorkImage
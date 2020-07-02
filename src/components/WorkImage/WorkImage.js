import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './WorkImage.scss';

const WorkImage = ({ image, noMatte }) => (
    <Grid container className="work-image">
        <Grid item container className="image-block" xs={12} alignItems="center" justify="center">
            <div className={`image-item ${noMatte && "no-matte"}`} style={{backgroundImage: `url(${image})`}}/>
        </Grid>
    </Grid>
)

export default WorkImage
import React, { Component } from 'react';
import LazyLoad from 'react-lazy-load';
import Grid from '@material-ui/core/Grid';
import './WorkImage.scss';

const WorkImage = ({ image, year, id, name, noMatte }) => (
    // <LazyLoad height="100%" offset={0}>
        <Grid container className="work-image">
            { year && id && name && 
                <Grid item container className="image-caption" alignItems="flex-start">
                    <div className="caption-item">
                        <span className="caption-text item-year">{year}</span>
                        <span className="caption-text item-id">{id}</span>
                        <span className="caption-text item-name">{name}</span>
                    </div>
                </Grid>
            }
            <Grid item container className="image-block" xs={12} alignItems="center" justify="center">
                <div className={`image-item ${noMatte && "no-matte"}`} style={{backgroundImage: `url(${image})`}}/>
            </Grid>
        </Grid>
    // </LazyLoad>
)

export default WorkImage
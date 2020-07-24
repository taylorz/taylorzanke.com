import React  from 'react';
import LazyLoad from 'react-lazyload';
import Grid from '@material-ui/core/Grid';
import './WorkImage.scss';

const WorkImage = ({ image, year, id, name, noMatte }) => (
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
                <LazyLoad throttle={200} offset={1600} height="100%">
                    <img className={`image-item ${noMatte && "no-matte"}`} src={image}/>
                </LazyLoad>
            </Grid>
    </Grid>
)

export default WorkImage
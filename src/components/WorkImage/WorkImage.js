import React  from 'react';
import LazyLoad from 'react-lazyload';
import Grid from '@material-ui/core/Grid';
import { CSSTransition, TransitionGroup, Transition } from 'react-transition-group'
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
        <LazyLoad throttle={1000} offset={800}>
            <Grid item container className="image-block" xs={12} alignItems="center" justify="center">
                <div className="image-block-wrapper">
                    <img className={`image-item ${noMatte && "no-matte"}`} src={image}/>
                </div>
            </Grid>
        </LazyLoad>
    </Grid>
)

export default WorkImage
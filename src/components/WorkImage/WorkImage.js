import React  from 'react';
import LazyLoad from 'react-lazyload';
import Grid from '@material-ui/core/Grid';
import WorkDetails from '../WorkDetails/WorkDetails'
import './WorkImage.scss';

const WorkImage = ({ noMatte, image, work, hasCaption }) => (
    <LazyLoad throttle={490} offset={980}>
        <Grid container className="work-image">
            <Grid item container className="image-block" xs={12} alignItems="center" justify="center">
                <div className="image-block-wrapper">
                    <img className={`image-item ${noMatte && "no-matte"}`} src={hasCaption ? work.images[1] : image}/>
                </div>
            </Grid>
            { hasCaption && 
                <Grid item container className="image-caption" xs={12} alignItems="flex-start">
                    <WorkDetails work={work}/>
                </Grid>
            }
        </Grid>
    </LazyLoad>
)

export default WorkImage
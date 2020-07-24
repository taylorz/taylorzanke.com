import React, { useState, useEffect } from 'react';
import LazyLoad from 'react-lazyload';
import Grid from '@material-ui/core/Grid';
import './WorkImage.scss';

// const useProgressiveImage = src => {  
//     const [sourceLoaded, setSourceLoaded] = useState(null)
//     useEffect(() => {
//       const img = new Image()
//       img.src = src
//       img.onload = () => setSourceLoaded(src)
//     }, [src])
//     return sourceLoaded 
// }

const WorkImage = ({ image, year, id, name, noMatte }) => {
    // const loaded = useProgressiveImage(image)
    // const placeholder = "hi"
    return (
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
                    <LazyLoad height="100%" width="100%" offset={1000}>
                        <img className={`image-item ${noMatte && "no-matte"}`} src={image}/>
                    </LazyLoad>
                </Grid>
        </Grid>
    )
}

export default WorkImage
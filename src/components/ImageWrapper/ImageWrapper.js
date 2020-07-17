import React from 'react';
import Grid from '@material-ui/core/Grid';
import './ImageWrapper.scss';

const ImageWrapper = ({ children }) => (
    <Grid item xs={12} md={10} className="image-wrapper">
        { children }
    </Grid>
)

export default ImageWrapper
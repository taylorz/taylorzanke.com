import React from 'react';
import Grid from '@material-ui/core/Grid';
import './Footer.scss';

const Footer = () => (
    <Grid container className="footer-container">
        <Grid item className="copyright">
            &copy; 2020
        </Grid>
    </Grid>
)

export default Footer
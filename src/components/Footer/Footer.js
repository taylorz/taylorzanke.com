import React from 'react';
import Grid from '@material-ui/core/Grid';
import './Footer.scss';

const Footer = () => (
    <Grid container className="footer-container">
        <Grid item className="copyright">
            <div>LAST UPDATED<br/>November 14, 2020</div>
        </Grid>
    </Grid>
)

export default Footer
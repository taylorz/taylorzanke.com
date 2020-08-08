import React from 'react';
import Grid from '@material-ui/core/Grid';
import './Footer.scss';

const Footer = () => (
    <Grid item xs={12} className="footer-container">
        <Grid item xs={12} className="bio">
            <p>Taylor Zanke is an artist and designer living in Los Angeles, CA. He takes a multi-format approach to art making: producing models, drawings, and photographs, many of which are represented in singular artist books. Taylor’s practice studies the shifting nature of potentials, present in familiar and mundane space, and develops long-form methodologies for reflecting on and revealing it. He uncovers ways in which our inner lives can be supported by the material realities around us, grafting personal reflections into commonplace forms or proposals.</p>
            <p>For more information:<br/>mail@taylorzanke.com</p>
            <p>For collaborations:<br/><a href="https://taylorzankeoffice.com" target="_blank">taylorzankeoffice.com</a></p>
        </Grid>
        <Grid item xs={12} className="copyright">
            <div>All work &copy; 2020 by Taylor Zanke unless otherwise stated. Any redistribution or reproduction of part or all of the contents in any form is prohibited. You may not transmit it or store it in any other website or other form of electronic retrieval system without the prior written permission of Taylor Zanke.</div>
        </Grid>
    </Grid>
)

export default Footer
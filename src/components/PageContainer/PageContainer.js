import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom"
import './PageContainer.scss';
import WorkList from '../WorkList/WorkList'

const PageContainer = ({ className, children, center }) => (
  <Grid container className={`page-container ${className}`} justify={`${center ? "center" : "flex-start"}`}>
    <Grid item xs={12} className="header">
      <div className="home"><Link to="/">Taylor Zanke</Link></div>
    </Grid>
    <Grid item xs={12}>{children}</Grid>
    <Grid item xs={12} sm={6} className="list">
      <div className="home"><Link to="/">Index</Link></div>
      <WorkList/>
    </Grid>
    <Grid item xs={12} className="copyright">
      <div>All work &copy; 2020 by Taylor Zanke unless otherwise stated. Any redistribution or reproduction of part or all of the contents in any form is prohibited. You may not transmit it or store it in any other website or other form of electronic retrieval system without the prior written permission of Taylor Zanke.</div>
    </Grid>
  </Grid>
)

export default PageContainer
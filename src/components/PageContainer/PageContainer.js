import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom"
import './PageContainer.scss';
import WorkList from '../WorkList/WorkList'

const PageContainer = ({ className, children, center }) => (
  <Grid container spacing={2} className={`page-container ${className}`} justify={`${center ? "center" : "flex-start"}`}>
    <Grid item xs={12}>{children}</Grid>
    <Grid item xs={12}>
      <div className="home"><Link to="/">Taylor Zanke</Link></div>
      <WorkList/>
    </Grid>
  </Grid>
)

export default PageContainer
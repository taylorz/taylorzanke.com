import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom"
import './PageContainer.scss';
import Nav from '../Nav/Nav'

const PageContainer = ({ className, children, center }) => (
  <Grid container spacing={2} className={`page-container ${className}`} justify={`${center ? "center" : "flex-start"}`}>
    <Grid item xs={12} sm={3}><Nav/></Grid>
    <Grid item xs={12} sm={9}>{children}</Grid>
    {/* <Grid item xs={11} className="mobile-home">
      <div className="home"><Link to="/">Taylor Zanke</Link></div>
    </Grid> */}
  </Grid>
)

export default PageContainer
import React from 'react';
import Grid from '@material-ui/core/Grid';
import './PageContainer.scss';

const PageContainer = ({ className, children, center }) => (
  <Grid container className={`page-container ${className}`} spacing={2} justify={`${center ? "center" : "flex-start"}`}>
    {children}
  </Grid>
)

export default PageContainer

import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Homepage.scss';
import WorkImage from '../../components/WorkImage/WorkImage'

//DATA IMPORTS
import WORKS from '../../constants/works/works'

const Homepage = () => (
  <Grid container className="homepage-container" spacing={2}>
    {WORKS.map((work) => 
      <Grid item xs={12} sm={4} className="image-item">
        <WorkImage
          image={work.images}
        />
      </Grid>
    )}
  </Grid>
)

export default Homepage

import React from 'react';
import Grid from '@material-ui/core/Grid';
import './ProjectPage.scss';
import WorkImage from '../../components/WorkImage/WorkImage'

//DATA IMPORTS
import WORKS from '../../constants/works/works'

const ProjectPage = () => (
  <Grid container className="project-page-container" spacing={2}>
    {WORKS.reverse().map((work) => 
      <Grid item xs={12} sm={12} className="image-display-item">
        <WorkImage
          image={work.images[1]}
        />
      </Grid>
    )}
  </Grid>
)

export default ProjectPage
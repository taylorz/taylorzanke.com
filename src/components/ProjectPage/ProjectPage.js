import React from 'react';
import Grid from '@material-ui/core/Grid';
import './ProjectPage.scss';
import WorkImage from '../../components/WorkImage/WorkImage'

const ProjectPage = ({ work }) => (
  <Grid container className="project-page-container" spacing={2} justify="center">
    {work.images.map((image) => 
      <Grid item xs={12} sm={8} className="image-display-item">
        <WorkImage
          image={image}
        />
      </Grid>
    )}
  </Grid>
)

export default ProjectPage
import React from 'react';
import Grid from '@material-ui/core/Grid';
import './ProjectPage.scss';
import PageContainer from '../../components/PageContainer/PageContainer'
import WorkImage from '../../components/WorkImage/WorkImage'
import WorkInfo from '../../components/WorkInfo/WorkInfo'

const ProjectPage = ({ work }) => (
  <PageContainer className="project-page">
    <Grid container spacing={2}>
      {work.images.map((image) => 
        <Grid item xs={12} sm={8} className="image-display-item">
          <WorkImage
            noMatte={
              work.id === 1 || 
              work.id === 2 || 
              work.id === 3 ||
              work.id === 5
            }
            image={image}
          />
        </Grid>
      )}
    </Grid>
  </PageContainer>
)

export default ProjectPage
import React from 'react';
import Grid from '@material-ui/core/Grid';
import './ProjectPage.scss';
import PageContainer from '../../components/PageContainer/PageContainer'
import ImageWrapper from '../../components/ImageWrapper/ImageWrapper'
import WorkImage from '../../components/WorkImage/WorkImage'
import WorkDetails from '../../components/WorkDetails/WorkDetails'

const ProjectPage = ({ work }) => (
  <PageContainer className="project-page">
    <Grid item xs={12} md={10} className="details-wrapper">
      <WorkDetails work={work}/>
    </Grid>
    <Grid container spacing={2} justify="center">
      {work.images.map((image) => 
          <ImageWrapper>
            <WorkImage
              noMatte={
                work.id === 1 || 
                work.id === 2 || 
                work.id === 3 ||
                work.id === 5
              }
              image={image}
            />
          </ImageWrapper>
      )}
    </Grid>
  </PageContainer>
)

export default ProjectPage
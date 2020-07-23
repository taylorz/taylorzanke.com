
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { NavLink } from "react-router-dom"
import './Homepage.scss';
import PageContainer from '../../components/PageContainer/PageContainer'
import ImageWrapper from '../../components/ImageWrapper/ImageWrapper'
import WorkImage from '../../components/WorkImage/WorkImage'

//DATA IMPORTS
import WORKS from '../../constants/works/works'

const Homepage = () => (
  <PageContainer className="homepage-container">
    <Grid container spacing={2} justify="center">
    {WORKS.sort(({ id: previousID }, { id: currentID }) => currentID - previousID).map((work) =>
      <ImageWrapper>
        <NavLink to={work.route}>
          <WorkImage
            noMatte={
              work.id === 1 || 
              work.id === 2 || 
              work.id === 3 ||
              work.id === 5
            }
            image={work.images[1]}
            id={work.id}
            name={work.name}
            year={work.year}
          />
        </NavLink>
        </ImageWrapper>
    )}
    </Grid>
  </PageContainer>
)

export default Homepage
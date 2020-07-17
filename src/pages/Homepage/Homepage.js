
import React from 'react';
import Grid from '@material-ui/core/Grid';
import {Link} from "react-router-dom"
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
        <Link to={work.route}>
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
        </Link>
        </ImageWrapper>
    )}
    </Grid>
    <Grid item xs={12} className="bio">
      <p>Taylor Zanke is an artist and designer living in Los Angeles, CA. He takes a multi-format approach to art making: producing models, drawings, and photographs, many of which are represented in singular artist books. Taylor’s practice studies the shifting nature of potential, present in familiar space, and develops long-form methodologies for reflecting on and revealing it. He uncovers ways in which our inner lives can be supported by the material realities around us, grafting personal reflections into common forms or proposals.</p>
      <p>For more information:<br/>mail@taylorzanke.com</p>
      <p>For collaborations:<br/><a href="https://taylorzankeoffice.com" target="_blank">taylorzankeoffice.com</a></p>
    </Grid>
  </PageContainer>
)

export default Homepage
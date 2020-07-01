
import React from 'react';
import Grid from '@material-ui/core/Grid';
import {Link} from "react-router-dom"
import './Homepage.scss';
import PageContainer from '../../components/PageContainer/PageContainer'
import WorkImage from '../../components/WorkImage/WorkImage'

//DATA IMPORTS
import WORKS from '../../constants/works/works'

const Homepage = () => (
  <PageContainer className="homepage-container">
    <Grid container spacing={2}>
    {WORKS.sort(({ id: previousID }, { id: currentID }) => currentID - previousID).map((work) =>
      <Grid item xs={12} lg={6} className="image-display-item">
        <Link to={work.route}>
          <WorkImage
            image={work.images[1]}
          />
        </Link>
      </Grid>
    )}
    </Grid>
  </PageContainer>
)

export default Homepage
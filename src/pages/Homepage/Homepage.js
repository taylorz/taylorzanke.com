
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"
import './Homepage.scss';
import PageContainer from '../../components/PageContainer/PageContainer'
import WorkImage from '../../components/WorkImage/WorkImage'

//DATA IMPORTS
import WORKS from '../../constants/works/works'

const Homepage = () => (
  <PageContainer className="homepage-container">
    {WORKS.slice(0).reverse().map((work) => 
      <Grid item xs={12} sm={6} className="image-display-item">
        <Link to={work.route}>
          <WorkImage
            image={work.images[1]}
          />
        </Link>
      </Grid>
    )}
    <Grid item xs={12} className="bio">Taylor Zanke is an artist and designer living in Los Angeles, CA. He takes a multi-format approach to art making: producing models, drawings, photographs, and collage, many of which are represented in singular artist books. Taylor’s practice studies the shifting nature of potential in space and develops long-form methodologies for reflecting on and revealing it. He uncovers ways in which our inner lives can be supported by the material realities around us, grafting personal reflections into common forms and proposals.</Grid>
  </PageContainer>
)

export default Homepage
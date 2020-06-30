
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"
import './Homepage.scss';
import WorkImage from '../../components/WorkImage/WorkImage'

//DATA IMPORTS
import WORKS from '../../constants/works/works'

const Homepage = () => (
  <Grid container className="homepage-container" spacing={2}>
    {WORKS.slice(0).reverse().map((work) => 
      <Grid item xs={12} sm={6} className="image-display-item">
        <Link to={work.route}>
          <WorkImage
            image={work.images[1]}
          />
        </Link>
      </Grid>
    )}
  </Grid>
)

export default Homepage
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"
import './ProjectPage.scss';
import PageContainer from '../../components/PageContainer/PageContainer'
import WorkImage from '../../components/WorkImage/WorkImage'
import WorkInfo from '../../components/WorkInfo/WorkInfo'

const ProjectPage = ({ work }) => (
  <PageContainer className="project-page" center>
    <Grid item container xs={12} className="index-link">
      <Link to="/">Index</Link>
    </Grid>
    {work.images.map((image) => 
      <Grid item xs={12} sm={10} className="image-display-item">
        <WorkImage
          image={image}
        />
      </Grid>
    )}
    <Grid item xs={12}>
      <WorkInfo work={work}/>
    </Grid>
  </PageContainer>
)

export default ProjectPage
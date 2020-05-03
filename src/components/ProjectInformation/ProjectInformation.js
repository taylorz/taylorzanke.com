import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import WorkImage from '../../components/WorkImage/WorkImage';
import './ProjectInformation.scss';

class ProjectInformation extends Component {
  render() {
    const { detail, projectArray } = this.props
    return (
      <Grid item xs={12} md={6} className="project-information">
        <div className="project-statement">
          <p>{projectArray.description}</p>
        </div>
        <Grid container className="project-data">
          <Grid item xs={12} md={6} className="data-copy">
            <span className="project-name">{projectArray.title}</span>
            {projectArray.object}. {projectArray.dimensions}. {projectArray.pages ? `${projectArray.pages}.` : null }
            <span className="data-information"> {projectArray.information ? projectArray.information : null}. </span>
            ({projectArray.year})
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default ProjectInformation;

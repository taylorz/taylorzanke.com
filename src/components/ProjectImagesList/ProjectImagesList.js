import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import WorkImage from '../../components/WorkImage/WorkImage';
import './ProjectImagesList.scss';

class ProjectImagesList extends Component {
  render() {
    const { detail, projectArray, isMatte, isDark, isLight } = this.props
    return (
      <Grid item xs={12} md={6} className="project-images-list">
      {projectArray.images.map((image) =>
        <div className="project-item">
          <WorkImage
            matte={isMatte}
            dark={isDark}
            light={isLight}
            image={image}
          />
        </div>
      )}
      </Grid>
    );
  }
}

export default ProjectImagesList;

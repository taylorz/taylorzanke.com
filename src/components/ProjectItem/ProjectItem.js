import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './ProjectItem.scss'

class ProjectItem extends Component {
  render() {
    const { className, title, year, id, status } = this.props
    return (
      <>
        <div className={`project-container ${className}`}>
          <Grid item xs={2} className="project-item project-id">{id}</Grid>
          <Grid item xs={9} className="project-item project-title">{title}{status ? <sup className="status-marker">{status}</sup> : null}</Grid>
          <Grid item xs={1} className="project-item project-year">{year}</Grid>
        </div>
      </>
    );
  }
}

export default ProjectItem;

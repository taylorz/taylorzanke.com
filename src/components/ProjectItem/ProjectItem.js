import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './ProjectItem.scss'

class ProjectItem extends Component {
  render() {
    const { className, title, year, id } = this.props
    return (
      <div className={`project-container ${className}`}>
        <Grid item xs={1} className="project-item project-id">{id}</Grid>
        <Grid item xs={10} className="project-item project-title">{title}</Grid>
        <Grid item xs={1} className="project-item project-year">{year}</Grid>
      </div>
    );
  }
}

export default ProjectItem;

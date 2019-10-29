import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Menu.scss';
import WritingItem from '../../components/WritingItem/WritingItem';
import ProjectItem from '../../components/ProjectItem/ProjectItem';

import WRITING from '../../constants/writing/writing';
import WORKS from '../../constants/works/works';

class Menu extends Component {
  render() {
    const { className } = this.props
    return (
        <Grid item lg={4} md={12} className={`menu ${className}`}>
          <div className="menu-section menu-headline">
            Taylor Zanke is an artist and designer who makes drawings, models, books, photographs, and recordings. He seeks to uncover the ways in which Space travels through Time, revealing potential, dismantling the inevitable.
          </div>
          <div className="menu-section menu-description">
            This website is a collection of works <sup>ABC</sup> and fragments <sup>123</sup> waiting to be both assembled and taken apart. An infinity is discovered through their psychic re-assembly and material re-organization. I store them in boxes, envelopes, and closets, in memories, anticipations, and fantasies.
          </div>
          <Grid container className="menu-section menu-writing">
            {WRITING.map((writing) =>
              <WritingItem title={writing.title} id={writing.id} year={writing.year}/>
            )}
          </Grid>
          <Grid container className="menu-section menu-projects">
          {WORKS.map((project) =>
            <ProjectItem title={project.title} id={project.id} year={project.year}/>
          )}
          </Grid>
        </Grid>
    );
  }
}

export default Menu;

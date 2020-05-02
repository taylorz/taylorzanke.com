import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Header from '../../components/Header/Header';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import './Menu.scss';

import WRITING from '../../constants/writing/writing';
import WORKS from '../../constants/works/works';
import FRAGMENTS from '../../constants/fragments/fragments';

class Menu extends Component {
  render() {
    const { className, onClick } = this.props
    return (
        <Grid item xs={12} className={`menu ${className}`}>
          <Grid container className="menu-wrapper">
            <Grid item xs={12} className="menu-section menu-pages">
              <ul className="page-list">
                <Link to="/"><li>Home</li></Link>
                <Link to="/about"><li>Information</li></Link>
              </ul>
            </Grid>
            <Grid item xs={12} className="menu-section menu-projects">
              <ul className="projects-list">
                {WORKS.map((work) =>
                  <Link to={work.link}><li><span>{work.title}</span>{work.object}. ({work.year})</li></Link>
                )}
              </ul>
            </Grid>
          </Grid>
        </Grid>
    );
  }
}

export default Menu;

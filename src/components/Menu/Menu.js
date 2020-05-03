import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Header from '../../components/Header/Header';
import { BrowserRouter as Router, Route, Link, NavLink} from "react-router-dom";
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
                <NavLink to="/" exact activeClassName="page-link-active"><li>Home</li></NavLink>
                <NavLink to="/about" activeClassName="page-link-active"><li>Information</li></NavLink>
              </ul>
            </Grid>
            <Grid item xs={12} className="menu-section menu-projects">
              <ul className="projects-list">
                {WORKS
                  .sort(({ year: previousID }, { year: currentID }) => currentID - previousID)
                  .map((work) =>
                  <NavLink to={work.link} activeClassName="project-link-active">
                    <li>
                    <Grid container className="nav-link-content">
                      <Grid item xs={9} className="title">{work.title}<span>{work.object}</span></Grid>
                      <Grid item xs={3} className="details">({work.year})</Grid>
                    </Grid>
                    </li>
                  </NavLink>
                )}
              </ul>
            </Grid>
          </Grid>
        </Grid>
    );
  }
}

export default Menu;

import React from 'react';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Route, Link, Switch, NavLink} from "react-router-dom"
import './Nav.scss';

import WORKS from '../../constants/works/works'

const Nav = () => (
  <Grid container className="nav">
    <Grid item xs={12}>
      <div className="home"><Link to="/">Taylor Zanke</Link></div>
    </Grid>
    <Grid item xs={12}>
    <ul>
        {WORKS
          .sort(({ id: previousID }, { id: currentID }) => currentID - previousID)
          .map((work) =>
          <Link to={work.url} activeClassName="nav-link-active">
            <li>
            <Grid container className="nav-link-content">
              <Grid item xs={9} className="title">{work.name}</Grid>
            </Grid>
            </li>
          </Link>
        )}
        </ul>
    </Grid>
  </Grid>
)

export default Nav
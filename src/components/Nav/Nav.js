import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link, NavLink } from "react-router-dom"
import './Nav.scss'
import WorkInfo from '../WorkInfo/WorkInfo'

import WORKS from '../../constants/works/works'

const Nav = () => (
  <Grid container className="nav">
    <Grid item xs={12} sm={10} lg={6}>
      <Grid container>
        <Grid item xs={12}>
          <div className="home"><Link to="/">Taylor Zanke</Link></div>
        </Grid>
      </Grid>
    <ul>
        {WORKS.sort(({ id: previousID }, { id: currentID }) => currentID - previousID).map((work) =>
            <li>
              <Grid container className="persistent-work-info">
                <Grid item container xs={12} className="work-details">
                  <NavLink to={work.route} className="nav-link" activeClassName="nav-link-active">
                    <span className="work-detail work-year">{work.year}</span>
                    <span className="work-detail work-id">{work.id}</span>
                    <span className="work-detail work-name">{work.name}</span>
                    <Grid container className="active-work-info">
                      <Grid item><WorkInfo work={work}/></Grid>
                    </Grid>
                  </NavLink>
                </Grid>
              </Grid>
            </li>
        )}
        </ul>
    </Grid>
  </Grid>
)

export default Nav
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link, NavLink } from "react-router-dom"
import './Nav.scss'
import WorkInfo from '../WorkInfo/WorkInfo'

import WORKS from '../../constants/works/works'

const Nav = () => (
  <Grid container className="nav">
    <Grid item xs={1}/>
    <Grid item xs={11}>
      <div className="home"><Link to="/">Taylor Zanke</Link></div>
    </Grid>
    <Grid item xs={12}>
    <ul>
        {WORKS.sort(({ id: previousID }, { id: currentID }) => currentID - previousID).map((work) =>
          <NavLink to={work.route} className="nav-link" activeClassName="nav-link-active">
            <li>
              <Grid container className="persistent-work-info">
                <Grid item xs={1} className="work-id">{work.id}</Grid>
                <Grid item xs={10} className="work-name">{work.name}</Grid>
                {/* <Grid item container xs={1} className="work-id" justify="flex-end">{work.year}</Grid> */}
              </Grid>
              <Grid container className="active-work-info">
                <Grid item xs={1}></Grid>
                <Grid item xs={10}><WorkInfo work={work}/></Grid>
              </Grid>
            </li>
          </NavLink>
        )}
        </ul>
    </Grid>
  </Grid>
)

export default Nav
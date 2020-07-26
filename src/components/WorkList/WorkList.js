import React from 'react';
import Grid from '@material-ui/core/Grid';
import { NavLink } from "react-router-dom"
import './WorkList.scss'
import WorkDetails from '../WorkDetails/WorkDetails'

import WORKS from '../../constants/works/works'

const WorkList = () => (
  <Grid container className="work-list">
    <Grid item xs={12} md={10}>
      <ul>
        {WORKS.sort(({ id: previousID }, { id: currentID }) => currentID - previousID).map((work) =>
            <li>
              <Grid container className="persistent-work-info">
                <Grid item xs={12} className="work-list-item">
                  <NavLink exact to={work.route} className="nav-link" activeClassName="nav-link-active">
                    <WorkDetails work={work}/>
                  </NavLink>
                </Grid>
              </Grid>
            </li>
        )}
        </ul>
    </Grid>
  </Grid>
)

export default WorkList
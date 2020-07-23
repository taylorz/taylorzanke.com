import React from 'react';
import Grid from '@material-ui/core/Grid';
import { NavLink } from "react-router-dom"
import './WorkList.scss'
import WorkInfo from '../WorkInfo/WorkInfo'

import WORKS from '../../constants/works/works'

const WorkList = () => (
  <Grid container className="work-list">
    <Grid item xs={12} md={10}>
      <ul>
        {WORKS.sort(({ id: previousID }, { id: currentID }) => currentID - previousID).map((work) =>
            <li>
              <Grid container className="persistent-work-info">
                <Grid item xs={12} className="work-details">
                  <NavLink exact to={work.route} className="nav-link" activeClassName="nav-link-active">
                    <Grid container className="details-container">
                      <Grid item xs={2} className="work-detail-item work-year">{work.year}</Grid>
                      <Grid item  xs={2} className="work-detail-item work-id">{work.id}</Grid>
                      <Grid item xs={8} className="work-detail-item work-name">
                        {work.name}
                        <Grid container className="active-work-info">
                          <Grid item><WorkInfo work={work}/></Grid>
                        </Grid>
                      </Grid>
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

export default WorkList
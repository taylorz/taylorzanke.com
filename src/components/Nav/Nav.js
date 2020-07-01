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
          <NavLink to={work.route} activeClassName="nav-link-active">
            <li><span>({work.year})</span> {work.name}</li>
          </NavLink>
        )}
        </ul>
    </Grid>
    {/* <Grid item xs={12}>
      Taylor Zanke is an artist and designer living in Los Angeles, CA. He takes a multi-format approach to art making: producing models, drawings, photographs, and recordings, many of which are represented in singular artist books. Taylor’s practice studies the shifting nature of potential in space and develops long-form methodologies for reflecting on and revealing it. He uncovers ways in which our inner lives can be supported by the material realities around us, grafting personal reflections into common forms and proposals.
    </Grid> */}
  </Grid>
)

export default Nav
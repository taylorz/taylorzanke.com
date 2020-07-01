import React from 'react';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"
import './Nav.scss';

const Nav = () => (
  <Grid container className="nav">
    <Grid item xs={12}>
      <div className="home"><Link to="/">Taylor Zanke</Link></div>
    </Grid>
  </Grid>
)

export default Nav
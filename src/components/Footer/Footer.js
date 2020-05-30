import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Route, Link, NavLink} from "react-router-dom";
import './Footer.scss';

import WORKS from '../../constants/works/works';

class Footer extends Component {
  showCurrentYear() {
    return new Date().getFullYear();
  }
  render() {
    const {  } = this.props
    return (
      <Grid container className="footer">
        <Grid item className="footer-section sitemap" xs={12}>
        <ul>
        <NavLink to="/" exact activeClassName="nav-link-active"><li className="site-index">Index</li></NavLink>
        {WORKS
          .sort(({ year: previousID }, { year: currentID }) => currentID - previousID)
          .map((work) =>
          <NavLink to={work.link} activeClassName="nav-link-active">
            <li>
            <Grid container className="nav-link-content">
              <Grid item xs={9} className="title">{work.title}</Grid>
            </Grid>
            </li>
          </NavLink>
        )}
        </ul>
        </Grid>
        <Grid item className="footer-section info" xs={12}>
          <ul>
            <li><a className="footer-link" href="mailto:mail@taylorzanke.com">mail@taylorzanke.com</a></li>
            <li><a className="footer-link" href="https://www.instagram.com/taylorzanke/">@taylorzanke</a></li>
            <br/>
            <li><a className="footer-link" href="https://taylorzankeoffice.com">For collaborations: Taylor Zanke Office</a></li>
          </ul>
          <p className="copyright">All work &copy; {this.showCurrentYear()} Taylor Zanke unless otherwise stated.</p>
        </Grid>
      </Grid>
    );
  }
}

export default Footer;

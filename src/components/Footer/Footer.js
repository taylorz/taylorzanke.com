import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Footer.scss';

class Footer extends Component {
  showCurrentYear() {
    return new Date().getFullYear();
  }
  render() {
    const {  } = this.props
    return (
      <Grid container className="footer">
        <Grid item className="footer-section header" xs={12} md={2}>
          Contact
        </Grid>
        <Grid item className="footer-section list" xs={12} md={3}>
          <ul>
            <li>mail@taylorzanke.com</li>
            <li>@taylorzanke</li>
          </ul>
        </Grid>
        <Grid item className="footer-section header" xs={12} md={2}>
          Information
        </Grid>
        <Grid item className="footer-section list" xs={12} md={3}>
          <ul>
            <li>Website set in Fann Grotesque</li>
            <li>Built in React</li>
          </ul>
        </Grid>
        <Grid item className="footer-section header copyright" xs={12} md={2}>
          &copy; {this.showCurrentYear()} Taylor Zanke
        </Grid>
      </Grid>
    );
  }
}

export default Footer;

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
        <Grid item className="footer-section list" xs={12} md={8}>
          <ul>
            <li><a className="footer-link" href="mailto:mail@taylorzanke.com">mail@taylorzanke.com</a></li>
            <li><a className="footer-link" href="https://www.instagram.com/taylorzanke/">@taylorzanke</a></li>
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

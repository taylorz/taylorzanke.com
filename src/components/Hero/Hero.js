import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import './Hero.scss';

class Hero extends Component {
  render() {
    const { className, heroText, heroLink } = this.props
    return (
      <div className={`hero-container ${className}`}>
        <Grid container className="hero-contents">
          <Grid item xs={12} md={6} className="hero-spacer"/>
          <Grid item xs={12} md={5} sm={6} className="hero-text-area">
            <p className="hero-text-paragraph">{heroText}</p>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Hero;

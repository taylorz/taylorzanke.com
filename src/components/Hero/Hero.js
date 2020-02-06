import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Hero.scss';

class Hero extends Component {
  render() {
    const { className, heroText } = this.props
    return (
      <div className={`hero-container ${className}`}>
        <Grid container className="hero-contents">
          <Grid item xs={12} md={6} className="hero-spacer"/>
          <Grid item xs={12} md={6} className="hero-text-area">
            <p>{heroText}</p>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Hero;

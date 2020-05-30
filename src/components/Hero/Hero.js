import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import Slideshow from "../Slideshow/Slideshow"
import './Hero.scss';

class Hero extends Component {
  render() {
    const {
      className,
      heroText,
      heroLink,
      workTitle,
      workYear,
      workObject,
      workDims,
      workInfo
    } = this.props
    return (
      <div className={`hero-container ${className}`}>
        <Grid container className="hero-contents">
          <Grid item xs={12} md={6} className="hero-image-section">
            <Slideshow/>
          </Grid>
          <Grid item xs={12} md={6} className="hero-statement-section">
            <Grid container className="statement-wrapper">
              <Grid item xs={12} md={12} className="statement-copy">
                <p>Taylor Zanke is an artist and designer living in Los Angeles, CA. He takes a multi-format approach to art making: producing models, drawings, photographs, and recordings, many of which are represented in singular artist books. Taylor’s practice studies the shifting nature of potential in space and develops long-form methodologies for reflecting on and revealing it. He uncovers ways in which our inner lives can be supported by the material realities around us, grafting personal reflections into common forms and proposals.</p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Hero;

// <Grid item xs={0} md={2} className="hero-spacer"/>
// <Grid item xs={12} md={3} className="hero-extra"></Grid>
// <Grid item xs={0} md={1} className="hero-spacer"/>
// <Grid item xs={12} md={6} className="hero-text-area">
//   {workTitle ?
//     <div>
//       <p className="work-title">{workTitle}</p>
//       <p className="work-data">{workYear}</p>
//       <p className="work-data">{workObject}, {workDims}</p>
//       <p className="work-data">{workInfo}</p>
//     </div>
//   : (
//     <p className="hero-text-paragraph">{heroText}</p>
//   )}
// </Grid>

import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import { Fade } from 'react-slideshow-image';
import './Hero.scss';

import TestImage from "../../assets/images/works/NightDrawings/NightDrawings3.jpeg"
import TestImage2 from "../../assets/images/works/Reformulations1/Reformulations1_2.png"
import TestImage3 from "../../assets/images/works/SplicedHouse/SplicedHouse2.jpg"

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
          <Grid item xs={12} md={6} lg={5} xl={4} className="hero-image-section">

        <div className="slide-container">
          <Fade
            arrows={false}
            transitionDuration={0}
            duration={5000}
            infinite={true}
            autoplay={true}
          >
            <div className="each-slide">
              <div className="slide-image" style={{'backgroundImage': `url(${TestImage})`}}></div>
              <div className="caption">
                <span className="detail-id">1</span>
                <span className="detail-caption">Domestic space is studied within itself.</span>
                <span className="detail-work"> Night Drawings.</span>
                <span className="detail-year"> (2018)</span>
              </div>
            </div>
            <div className="each-slide">
              <div className="slide-image" style={{'backgroundImage': `url(${TestImage2})`}}></div>
              <div className="caption">
                <span className="detail-id">2</span>
                <span className="detail-caption">A spread showing a textured image.</span>
                <span className="detail-work"> Two Cities Reader.</span>
                <span className="detail-year"> (2020)</span>
              </div>
            </div>
            <div className="each-slide">
              <div className="slide-image" style={{'backgroundImage': `url(${TestImage3})`}}></div>
              <div className="caption">
                <span className="detail-id">3</span>
                <span className="detail-caption">Details of something.</span>
                <span className="detail-work"> Reformulations 1.</span>
                <span className="detail-year"> (2020)</span>
              </div>
            </div>
          </Fade>
        </div>

          </Grid>
          <Grid item xs={12} md={6} className="hero-statement-section">
            <Grid container className="statement-wrapper">
              <Grid item xs={12} md={12} lg={10} className="statement-copy">Taylor Zanke is a Canadian artist and designer living in Los Angeles, CA. He produces books, models, drawings, and recordings.</Grid>
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

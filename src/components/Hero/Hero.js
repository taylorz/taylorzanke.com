import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import { Fade } from 'react-slideshow-image';
import './Hero.scss';

import TestImage from "../../assets/images/works/TransmissionsFrom/details/05.png"
import TestImage2 from "../../assets/images/works/Reformulations1/Reformulations1_2.png"
import TestImage3 from "../../assets/images/works/PhotographBook/PhotographBook4.png"

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
          <Grid item xs={12} md={6} lg={5} className="hero-image-section">
            <div className="slide-container">
              <Fade
                arrows={false}
                transitionDuration={0}
                duration={10000}
                infinite={true}
                autoplay={true}
              >
                <div className="each-slide">
                  <div className="slide-image" style={{'backgroundImage': `url(${TestImage})`}}></div>
                  <div className="caption">
                    <span className="detail-id">Detail 1</span>
                    <span className="detail-caption">Two qualities of line, drawn in counterpoint, reveal a map of potential.</span>
                    <span className="detail-work"> Transmissions From Rare Space.</span>
                    <span className="detail-year"> (2019)</span>
                  </div>
                </div>
                <div className="each-slide">
                  <div className="slide-image" style={{'backgroundImage': `url(${TestImage2})`}}></div>
                  <div className="caption">
                    <span className="detail-id">Detail 2</span>
                    <span className="detail-caption">A spread from the volume displays two images coincidentally creating a new space.</span>
                    <span className="detail-work"> Reformulations 1.</span>
                    <span className="detail-year"> (2020)</span>
                  </div>
                </div>
                <div className="each-slide">
                  <div className="slide-image" style={{'backgroundImage': `url(${TestImage3})`}}></div>
                  <div className="caption">
                    <span className="detail-id">Detail 3</span>
                    <span className="detail-caption">The center of a hand stitched signature shows a sweeping landscape in color.</span>
                    <span className="detail-work"> Two Visitations Reader.</span>
                    <span className="detail-year"> (2020)</span>
                  </div>
                </div>
              </Fade>
            </div>
          </Grid>
          <Grid item xs={12} md={6} className="hero-statement-section">
            <Grid container className="statement-wrapper">
              <Grid item xs={12} md={12} lg={10} xl={9} className="statement-copy">Taylor Zanke is a Canadian artist living in Los Angeles, CA. He produces books, models, drawings, and recordings, in an effort to investigate and reveal new potentials for space.</Grid>
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

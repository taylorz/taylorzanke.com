import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import { Fade } from 'react-slideshow-image';
import './Hero.scss';

import TestImage from "../../assets/images/works/TransmissionsFrom/details/05.png"
import TestImage2 from "../../assets/images/works/_TEMP/04.png"
import TestImage3 from "../../assets/images/works/TwoVisitations/TwoVisitations4.png"
import TestImage4 from "../../assets/images/works/_TEMP/01.png"
import TestImage5 from "../../assets/images/works/_TEMP/03.png"

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
            <div className="slide-container">
              <Fade
                arrows={false}
                transitionDuration={0}
                duration={10000}
                infinite={true}
                autoplay={true}
              >
                <div className="each-slide">
                  <div className="slide-image" style={{'backgroundImage': `url(${TestImage4})`}}></div>
                  <div className="caption">
                    <span className="detail-id">Detail 1</span>
                    <span className="detail-caption">A crashing wave occupies the center of a signature.</span>
                    <span className="detail-work"> Two Visitations.</span>
                    <span className="detail-year"> (2020)</span>
                  </div>
                </div>
                <div className="each-slide">
                  <div className="slide-image" style={{'backgroundImage': `url(${TestImage})`}}></div>
                  <div className="caption">
                    <span className="detail-id">Detail 2</span>
                    <span className="detail-caption">Two qualities of line, drawn in counterpoint, reveal a map of potential.</span>
                    <span className="detail-work"> Transmissions From Rare Space.</span>
                    <span className="detail-year"> (2019)</span>
                  </div>
                </div>
                <div className="each-slide">
                  <div className="slide-image" style={{'backgroundImage': `url(${TestImage2})`}}></div>
                  <div className="caption">
                    <span className="detail-id">Detail 3</span>
                    <span className="detail-caption">Images are overprinted with drawings and mass.</span>
                    <span className="detail-work"> Reformulations 1.</span>
                    <span className="detail-year"> (2020)</span>
                  </div>
                </div>
                <div className="each-slide">
                  <div className="slide-image" style={{'backgroundImage': `url(${TestImage5})`}}></div>
                  <div className="caption">
                    <span className="detail-id">Detail 4</span>
                    <span className="detail-caption">Two trees reach toward each other, one year apart.</span>
                    <span className="detail-work"> Two Visitations Reader.</span>
                    <span className="detail-year"> (2020)</span>
                  </div>
                </div>
              </Fade>
            </div>
          </Grid>
          <Grid item xs={12} md={6} className="hero-statement-section">
            <Grid container className="statement-wrapper">
              <Grid item xs={12} className="statement-copy">
                <p>Taylor Zanke is an artist and designer living in Los Angeles, CA. He takes a multi-format approach to art making: producing models, drawings, photographs, and recordings, many of which are represented in singular artist books. Taylor’s practice studies the shifting nature of potential in space, and develops long-form methodologies for reflecting on and revealing it. He uncovers ways in which our inner lives can be supported by the material realities around us, grafting personal reflections into common forms and proposals.</p>
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

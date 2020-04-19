import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Hero.scss';

import TestImage from "../../assets/images/works/NightDrawings/NightDrawings3.jpeg"
import TestImage2 from "../../assets/images/works/NightDrawings/NightDrawings1.jpeg"
import TestImage3 from "../../assets/images/works/NightDrawings/NightDrawings2.jpeg"

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
            <Carousel
              showThumbs={false}
              showIndicators={false}
              showArrows={false}
              showStatus={false}
              autoPlay={true}
              interval={3000}
              slide={false}
              infiniteLoop={true}
            >
                <div>
                    <img src={TestImage} />
                    <div className="caption-wrapper">
                    hij lk;jas dlfkj askljdf; aj
                    </div>
                </div>
                <div>
                    <img src={TestImage2} />
                    <div className="caption-wrapper">
                    2 kjasd ;lfjka
                    </div>
                </div>
                <div>
                    <img src={TestImage3} />
                    <div className="caption-wrapper">
                    3 kjsad ;fjkla
                    </div>
                </div>
            </Carousel>
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

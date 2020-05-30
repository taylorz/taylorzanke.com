import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Fade } from 'react-slideshow-image';
import './Slideshow.scss';

import TestImage from "../../assets/images/details/hero-details/01.png"
import TestImage1 from "../../assets/images/details/hero-details/02.png"
import TestImage2 from "../../assets/images/details/hero-details/03.png"
import TestImage3 from "../../assets/images/details/hero-details/04.png"
import TestImage4 from "../../assets/images/details/hero-details/05.png"
import TestImage5 from "../../assets/images/details/hero-details/06.png"
import TestImage6 from "../../assets/images/details/hero-details/07.png"

class Slideshow extends Component {
  render() {
    const {  } = this.props
    return (
      <div className="slide-container">
        <Fade
          arrows={false}
          transitionDuration={0}
          duration={1000}
          infinite={true}
          autoplay={true}
        >
          <div className="each-slide">
            <div className="slide-image" style={{'backgroundImage': `url(${TestImage})`}}></div>
            {/*
            <div className="caption">
              <span className="detail-id">Detail 1</span>
              <span className="detail-caption">A crashing wave occupies the center of a signature.</span>
              <span className="detail-work"> Two Visitations.</span>
              <span className="detail-year"> (2020)</span>
            </div>
            */}
          </div>
          <div className="each-slide">
            <div className="slide-image" style={{'backgroundImage': `url(${TestImage1})`}}></div>
            {/*
            <div className="caption">
              <span className="detail-id">Detail 2</span>
              <span className="detail-caption">Two qualities of line, drawn in counterpoint, reveal a map of potential.</span>
              <span className="detail-work"> Transmissions From Rare Space.</span>
              <span className="detail-year"> (2019)</span>
            </div>
            */}
          </div>
          <div className="each-slide">
            <div className="slide-image" style={{'backgroundImage': `url(${TestImage2})`}}></div>
            {/*
            <div className="caption">
              <span className="detail-id">Detail 2</span>
              <span className="detail-caption">Two qualities of line, drawn in counterpoint, reveal a map of potential.</span>
              <span className="detail-work"> Transmissions From Rare Space.</span>
              <span className="detail-year"> (2019)</span>
            </div>
            */}
          </div>
          <div className="each-slide">
            <div className="slide-image" style={{'backgroundImage': `url(${TestImage3})`}}></div>
            {/*
            <div className="caption">
              <span className="detail-id">Detail 2</span>
              <span className="detail-caption">Two qualities of line, drawn in counterpoint, reveal a map of potential.</span>
              <span className="detail-work"> Transmissions From Rare Space.</span>
              <span className="detail-year"> (2019)</span>
            </div>
            */}
          </div>
          <div className="each-slide">
            <div className="slide-image" style={{'backgroundImage': `url(${TestImage4})`}}></div>
            {/*
            <div className="caption">
              <span className="detail-id">Detail 2</span>
              <span className="detail-caption">Two qualities of line, drawn in counterpoint, reveal a map of potential.</span>
              <span className="detail-work"> Transmissions From Rare Space.</span>
              <span className="detail-year"> (2019)</span>
            </div>
            */}
          </div>
          <div className="each-slide">
            <div className="slide-image" style={{'backgroundImage': `url(${TestImage5})`}}></div>
            {/*
            <div className="caption">
              <span className="detail-id">Detail 2</span>
              <span className="detail-caption">Two qualities of line, drawn in counterpoint, reveal a map of potential.</span>
              <span className="detail-work"> Transmissions From Rare Space.</span>
              <span className="detail-year"> (2019)</span>
            </div>
            */}
          </div>
          <div className="each-slide">
            <div className="slide-image" style={{'backgroundImage': `url(${TestImage6})`}}></div>
            {/*
            <div className="caption">
              <span className="detail-id">Detail 2</span>
              <span className="detail-caption">Two qualities of line, drawn in counterpoint, reveal a map of potential.</span>
              <span className="detail-work"> Transmissions From Rare Space.</span>
              <span className="detail-year"> (2019)</span>
            </div>
            */}
          </div>
        </Fade>
      </div>
    );
  }
}

export default Slideshow;

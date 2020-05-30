
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Homepage.scss';
import SiteWrapper from '../../components/SiteWrapper/SiteWrapper';
import PageContainer from '../../components/PageContainer/PageContainer';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';
import Menu from '../../components/Menu/Menu';
import WorkImage from '../../components/WorkImage/WorkImage';
import TextBlock from '../../components/TextBlock/TextBlock';
import PageContent from '../../components/PageContent/PageContent';

import WORKS from '../../constants/works/works';
import FRAGMENTS from '../../constants/fragments/fragments';

const TransmissionsFrom = WORKS[0];
const DirectionZine = WORKS[1];
const SeveralSpeculative = WORKS[2];
const TwoCitiesDiaryHNY = WORKS[3];
const TwoCitiesDiaryMP = WORKS[4];
const Reformulations1 = WORKS[5];
const TwoVisitations = WORKS[6];

class Homepage extends Component {
  render() {
    return (
      <>
        <SiteWrapper>
          <PageContainer className="homepage">
            <Hero/>
            {/*<Grid container className="statement-wrapper">
              <Grid item xs={0} md={6} className="statement-spacer"/>
              <Grid item xs={12} md={6} className="statement-copy">
                Taylor Zanke is an artist and designer living in Los Angeles, CA. He takes a multi-format approach to art making: producing models, drawings, photographs, and recordings, many of which are represented in singular artist books.
              </Grid>
            </Grid>*/}
              <div className="project-list">
              <div className="project-item">
                <Grid container className="project-wrapper">
                  <Grid item xs={12} md={6} className="project-preview-image">
                    <WorkImage
                      matte
                      link={Reformulations1.link}
                      image={Reformulations1.images[5]}
                    />
                  </Grid>
                  <Grid item xs={12} md={3} className="project-preview-name">
                    <div className="project-caption">
                      <div className="caption-title">{Reformulations1.title}</div>
                      <div className="caption-information">{Reformulations1.object}. {Reformulations1.dimensions}. {Reformulations1.pages}. <span>{Reformulations1.information}</span>. ({Reformulations1.year})</div>
                    </div>
                  </Grid>
                </Grid>
              </div>
              <div className="project-item">
                <Grid container className="project-wrapper">
                  <Grid item xs={12} md={6} className="project-preview-image">
                    <WorkImage
                      matte
                      link={TwoVisitations.link}
                      image={TwoVisitations.images[1]}
                    />
                  </Grid>
                  <Grid item xs={12} md={3} className="project-preview-name">
                    <div className="project-caption">
                      <div className="caption-title">{TwoVisitations.title}</div>
                      <div className="caption-information">{TwoVisitations.object}. {TwoVisitations.dimensions}. {TwoVisitations.pages}. <span>{TwoVisitations.information}</span>. ({TwoVisitations.year})</div>
                    </div>
                  </Grid>
                </Grid>
              </div>
              <div className="project-item">
                <Grid container className="project-wrapper">
                  <Grid item xs={12} md={6} className="project-preview-image">
                    <WorkImage
                      full
                      link={TransmissionsFrom.link}
                      image={TransmissionsFrom.images[3]}
                    />
                  </Grid>
                  <Grid item xs={12} md={3} className="project-preview-name">
                    <div className="project-caption">
                      <div className="caption-title">{TransmissionsFrom.title}</div>
                      <div className="caption-information">{TransmissionsFrom.object}. {TransmissionsFrom.dimensions}. <span>{TransmissionsFrom.information}</span>. ({TransmissionsFrom.year})</div>
                    </div>
                  </Grid>
                </Grid>
              </div>
              <div className="project-item">
                <Grid container className="project-wrapper">
                  <Grid item xs={12} md={6} className="project-preview-image">
                    <WorkImage
                      full
                      link={SeveralSpeculative.link}
                      image={SeveralSpeculative.images[6]}
                    />
                  </Grid>
                  <Grid item xs={12} md={3} className="project-preview-name">
                    <div className="project-caption">
                      <div className="caption-title">{SeveralSpeculative.title}</div>
                      <div className="caption-information">{SeveralSpeculative.object}. {SeveralSpeculative.dimensions}. <span>{SeveralSpeculative.information}</span>. ({SeveralSpeculative.year})</div>
                    </div>
                  </Grid>
                </Grid>
              </div>
              <div className="project-item">
                <Grid container className="project-wrapper">
                  <Grid item xs={12} md={6} className="project-preview-image">
                    <WorkImage
                      full
                      link={TwoCitiesDiaryHNY.link}
                      image={TwoCitiesDiaryHNY.images[1]}
                    />
                  </Grid>
                  <Grid item xs={12} md={3} className="project-preview-name">
                    <div className="project-caption">
                      <div className="caption-title">{TwoCitiesDiaryHNY.title}</div>
                      <div className="caption-information">{TwoCitiesDiaryHNY.object}. {TwoCitiesDiaryHNY.dimensions}. <span>{TwoCitiesDiaryHNY.information}</span>. ({TwoCitiesDiaryHNY.year})</div>
                    </div>
                  </Grid>
                </Grid>
              </div>
              <div className="project-item">
                <Grid container className="project-wrapper">
                  <Grid item xs={12} md={6} className="project-preview-image">
                    <WorkImage
                      full
                      link={TwoCitiesDiaryMP.link}
                      image={TwoCitiesDiaryMP.images[4]}
                    />
                  </Grid>
                  <Grid item xs={12} md={3} className="project-preview-name">
                    <div className="project-caption">
                      <div className="caption-title">{TwoCitiesDiaryMP.title}</div>
                      <div className="caption-information">{TwoCitiesDiaryMP.object}. {TwoCitiesDiaryMP.dimensions}. <span>{TwoCitiesDiaryMP.information}</span>. ({TwoCitiesDiaryMP.year})</div>
                    </div>
                  </Grid>
                </Grid>
              </div>
              <div className="project-item">
                <Grid container className="project-wrapper">
                  <Grid item xs={12} md={6} className="project-preview-image">
                    <WorkImage
                      matte
                      dark
                      link={DirectionZine.link}
                      image={DirectionZine.images[2]}
                    />
                  </Grid>
                  <Grid item xs={12} md={3} className="project-preview-name">
                    <div className="project-caption">
                      <div className="caption-title">{DirectionZine.title}</div>
                      <div className="caption-information">{DirectionZine.object}. {DirectionZine.dimensions}. <span>{DirectionZine.information}</span>. ({DirectionZine.year})</div>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </div>
          </PageContainer>
        </SiteWrapper>
      </>
    );
  }
}

export default Homepage;

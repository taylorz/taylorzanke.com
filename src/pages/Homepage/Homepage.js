
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Homepage.scss';
import SiteWrapper from '../../components/SiteWrapper/SiteWrapper';
import PageContainer from '../../components/PageContainer/PageContainer';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Menu from '../../components/Menu/Menu';
import WorkImage from '../../components/WorkImage/WorkImage';
import TextBlock from '../../components/TextBlock/TextBlock';
import PageContent from '../../components/PageContent/PageContent';

import WORKS from '../../constants/works/works';
import FRAGMENTS from '../../constants/fragments/fragments';

const TransmissionsFrom = WORKS[0];
const GraftedSpaces = WORKS[1];
const NightDrawings = WORKS[2];
const SplicedHouse = WORKS[3];
const DirectionZine = WORKS[4];
const SeveralSpeculative = WORKS[5];
const StackWorks = WORKS[6];
const TwoCitiesDiaryHNY = WORKS[7];
const TwoCitiesDiaryMP = WORKS[8];
const Reformulations1 = WORKS[9];
const TwoVisitations = WORKS[10];

class Homepage extends Component {
  state = {
    menuOpened: false,
  }
  toggleMenu() {
    this.setState({
      menuOpened: !this.state.menuOpened,
    });
  }
  render() {
    return (
      <>
        <SiteWrapper menuState={this.state.menuOpened ? "menu-opened" : "menu-closed"}>
          <Menu onClick={() => this.toggleMenu()}/>
          <PageContainer className="homepage">
            <Header onClick={() => this.toggleMenu()} link="/about" linkName="Info"/>
            <Hero/>
            {/*{WORKS.map((work) =>
              <div className="project-item">
                <Grid container className="project-wrapper">
                  <Grid item xs={12} md={6} className="project-preview-image">
                    <WorkImage
                      matte
                      image={work.images[0]}
                    />
                  </Grid>
                  <Grid item xs={12} md={3} className="project-preview-name">
                    {work.title}
                  </Grid>
                </Grid>
              </div>
            )}*/}
              <div className="project-list">
              <div className="project-item">
                <Grid container className="project-wrapper">
                  <Grid item xs={12} md={6} className="project-preview-image">
                    <WorkImage
                      matte
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

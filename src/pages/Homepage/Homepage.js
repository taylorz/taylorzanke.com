
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
const PhotographBook = WORKS[10];

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
            <Header light onClick={() => this.toggleMenu()} context="Taylor Zanke" contextLink="/" workDetail="Art books and drawings"/>
            <div className="temp-hero">
              <Grid container className="hero-container">
                <Grid item md={3} xs={12} className="hero-work-preview">
                  <img className="work-preview-img" src={Reformulations1.images[0]}></img>
                </Grid>
                <Grid item md={3} xs={12} className="hero-work-preview">
                  <img className="work-preview-img" src={PhotographBook.images[0]}></img>
                </Grid>
                <Grid item md={4} xs={12} className="hero-work-preview">
                  <img className="work-preview-img" src={TransmissionsFrom.images[7]}></img>
                </Grid>
                <Grid item md={4} xs={12} className="hero-work-preview">
                  <img className="work-preview-img" src={SeveralSpeculative.images[10]}></img>
                </Grid>
              </Grid>
            </div>
          </PageContainer>
        </SiteWrapper>
      </>
    );
  }
}

export default Homepage;

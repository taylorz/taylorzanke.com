import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Homepage.scss';
import SiteWrapper from '../../components/SiteWrapper/SiteWrapper';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import PageContainer from '../../components/PageContainer/PageContainer';
import Work from '../../components/Work/Work';
import Fragments from '../../components/Fragments/Fragments';

import WORKS from '../../constants/works/works';
import FRAGMENTS from '../../constants/fragments/fragments';

const HardMatter = WORKS[0];
const GraftedSpaces = WORKS[1];
const NightDrawings = WORKS[2];
const SplicedHouse = WORKS[3];
const DirectionZine = WORKS[4];
const SeveralSpeculative = WORKS[5];
const StackWorks = WORKS[6];
const TwoCitiesDiary = WORKS[7];

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
          <PageContainer className="homepage" onClick={this.state.menuOpened ? () => this.toggleMenu() : null}>
          <Header onClick={() => this.toggleMenu()}/>
          <Grid container className="homepage-hero">
            <Grid item md={6} lg={12} className="hero-taylor">
              {/*<p>Taylor Zanke is an artist and designer who makes drawings, models, books, photographs, and recordings. He seeks to uncover the ways in which Space travels through Time, revealing potential, dismantling inevitability.</p>*/}
            </Grid>
            <Grid item md={6} lg={4} className="hero-contact">

            </Grid>
          </Grid>
          <Grid container className="works-grid">
            <Grid item md={12} className="work-item">
              <Work
                matte
                dark
                workImage={TwoCitiesDiary.images[0]}
              />
            </Grid>
            <Grid item md={12} className="work-item">
            <Work
              matte
              light
              workImage={NightDrawings.images[1]}
            />
            </Grid>
          </Grid>
          </PageContainer>
          <Menu onClick={() => this.toggleMenu()}/>
        </SiteWrapper>
      </>
    );
  }
}

export default Homepage;

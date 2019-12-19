import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Homepage.scss';
import SiteWrapper from '../../components/SiteWrapper/SiteWrapper';
import PageContainer from '../../components/PageContainer/PageContainer';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';

import WORKS from '../../constants/works/works';
import FRAGMENTS from '../../constants/fragments/fragments';

const TransmissionsFrom = WORKS[0];
const GraftedSpaces = WORKS[1];
const NightDrawings = WORKS[2];
const SplicedHouse = WORKS[3];
const DirectionZine = WORKS[4];
const SeveralSpeculative = WORKS[5];
const StackWorks = WORKS[6];
const TwoCitiesDiary = WORKS[7];
const TwoCitiesDiaryMP = WORKS[8];

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
            <Header onClick={() => this.toggleMenu()} context="Taylor Zanke" contextLink="/" what="Collected Works, Fragments, and Writings." toggler="Information"/>
            <div className="work-image-wrapper"><img className="work-image" src={SeveralSpeculative.images[6]}/></div>
            <div className="work-image-wrapper"><img className="work-image" src={TransmissionsFrom.images[1]}/></div>

          </PageContainer>
        </SiteWrapper>
      </>
    );
  }
}

export default Homepage;

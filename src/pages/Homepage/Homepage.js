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
          <Grid container className="homepage-works">
            <Grid item md={3}></Grid>
          </Grid>
            <Work
              matte
              hasCaption={false}
              workImage={SplicedHouse.images[0]}
            />
          </PageContainer>
          <Menu/>
        </SiteWrapper>
      </>
    );
  }
}

export default Homepage;

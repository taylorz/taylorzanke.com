import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './NightDrawings.scss';
import SiteWrapper from '../../components/SiteWrapper/SiteWrapper';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import PageContainer from '../../components/PageContainer/PageContainer';
import WorkImage from '../../components/WorkImage/WorkImage';
import TextBlock from '../../components/TextBlock/TextBlock';

import WORKS from '../../constants/works/works';

const NightDrawingsWork = WORKS[2];

class NightDrawings extends Component {
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
          <PageContainer className="work-page night-drawings" onClick={this.state.menuOpened ? () => this.toggleMenu() : null}>
          <Header onClick={() => this.toggleMenu()} context="Taylor Zanke" contextLink="/" what="Night Drawings." toggler="Information"/>
          <WorkImage matte image={NightDrawingsWork.images[0]}/>
          <WorkImage matte image={NightDrawingsWork.images[1]}/>
          <WorkImage matte image={NightDrawingsWork.images[2]}/>
          <WorkImage matte image={NightDrawingsWork.images[3]}/>
          <WorkImage matte image={NightDrawingsWork.images[4]}/>
          <WorkImage matte image={NightDrawingsWork.images[5]}/>
          <WorkImage matte image={NightDrawingsWork.images[6]}/>
          <WorkImage matte image={NightDrawingsWork.images[7]}/>
          <TextBlock
            blockOne='1'
            blockTwo='2'
            blockThree='3'
          />
          </PageContainer>
        </SiteWrapper>
      </>
    );
  }
}

export default NightDrawings;

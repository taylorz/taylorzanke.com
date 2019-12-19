import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './DirectionZine.scss';
import SiteWrapper from '../../components/SiteWrapper/SiteWrapper';
import PageContainer from '../../components/PageContainer/PageContainer';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import WorkImage from '../../components/WorkImage/WorkImage';
import TextBlock from '../../components/TextBlock/TextBlock';

import WORKS from '../../constants/works/works';

const DirectionZineWork = WORKS[4];

class DirectionZine extends Component {
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
          <PageContainer className="work-page direction-zine" onClick={this.state.menuOpened ? () => this.toggleMenu() : null}>
          <Header onClick={() => this.toggleMenu()} context="Taylor Zanke" contextLink="/" what="Direction Zine." toggler="Information"/>
          <WorkImage matte image={DirectionZineWork.images[0]}/>
          <WorkImage matte image={DirectionZineWork.images[1]}/>
          <WorkImage matte image={DirectionZineWork.images[2]}/>
          <WorkImage matte image={DirectionZineWork.images[3]}/>
          <WorkImage matte image={DirectionZineWork.images[4]}/>
          <WorkImage matte image={DirectionZineWork.images[5]}/>
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

export default DirectionZine;

import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './SeveralSpeculative.scss';
import SiteWrapper from '../../components/SiteWrapper/SiteWrapper';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import PageContainer from '../../components/PageContainer/PageContainer';
import WorkImage from '../../components/WorkImage/WorkImage';
import TextBlock from '../../components/TextBlock/TextBlock';

import WORKS from '../../constants/works/works';

const SeveralSpeculativeWork = WORKS[5];

class SeveralSpeculative extends Component {
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
          <PageContainer className="work-page several-speculative" onClick={this.state.menuOpened ? () => this.toggleMenu() : null}>
            <Header onClick={() => this.toggleMenu()} context="Index" contextLink="/" what="Several Speculative Improvements to my Family Home." toggler="Information"/>
            <WorkImage image={SeveralSpeculativeWork.images[0]}/>
            <WorkImage image={SeveralSpeculativeWork.images[1]}/>
            <WorkImage image={SeveralSpeculativeWork.images[2]}/>
            <WorkImage image={SeveralSpeculativeWork.images[3]}/>
            <WorkImage image={SeveralSpeculativeWork.images[4]}/>
            <WorkImage image={SeveralSpeculativeWork.images[5]}/>
            <WorkImage image={SeveralSpeculativeWork.images[6]}/>
            <WorkImage image={SeveralSpeculativeWork.images[7]}/>
            <WorkImage image={SeveralSpeculativeWork.images[8]}/>
            <WorkImage image={SeveralSpeculativeWork.images[9]}/>
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

export default SeveralSpeculative;

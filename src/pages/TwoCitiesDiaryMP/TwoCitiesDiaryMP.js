import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './TwoCitiesDiaryMP.scss';
import SiteWrapper from '../../components/SiteWrapper/SiteWrapper';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import PageContainer from '../../components/PageContainer/PageContainer';

import WORKS from '../../constants/works/works';

const TwoCitiesDiaryMPWork = WORKS[8];

class TwoCitiesDiaryMP extends Component {
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
          <PageContainer className="work-page two-cities-mp" onClick={this.state.menuOpened ? () => this.toggleMenu() : null}>
          <Header onClick={() => this.toggleMenu()}/>
          </PageContainer>
          <Menu onClick={() => this.toggleMenu()}/>
        </SiteWrapper>
      </>
    );
  }
}

export default TwoCitiesDiaryMP;

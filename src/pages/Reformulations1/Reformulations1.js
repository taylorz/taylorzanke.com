
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Reformulations1.scss';
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

const Reformulations1Work = WORKS[9];

class Reformulations1 extends Component {
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
          <PageContainer className="reformulations-1">

          </PageContainer>
        </SiteWrapper>
      </>
    );
  }
}

export default Reformulations1;

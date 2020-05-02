import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './TwoCitiesDiaryHNY.scss';
import SiteWrapper from '../../components/SiteWrapper/SiteWrapper';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Menu from '../../components/Menu/Menu';
import PageContainer from '../../components/PageContainer/PageContainer';
import WorkImage from '../../components/WorkImage/WorkImage';
import TextBlock from '../../components/TextBlock/TextBlock';
import PageContent from '../../components/PageContent/PageContent';

import WORKS from '../../constants/works/works';

const TwoCitiesDiaryHNYWork = WORKS[7];

class TwoCitiesDiary extends Component {
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
          <Header onClick={() => this.toggleMenu()}/>
          <PageContainer className="work-page two-cities-hny" onClick={this.state.menuOpened ? () => this.toggleMenu() : null}>
          <PageContent>
            {TwoCitiesDiaryHNYWork.images.map((image) =>
              <WorkImage image={image}/>
            )}
          </PageContent>
          </PageContainer>
        </SiteWrapper>
      </>
    );
  }
}

export default TwoCitiesDiary;

import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './NightDrawings.scss';
import SiteWrapper from '../../components/SiteWrapper/SiteWrapper';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import PageContainer from '../../components/PageContainer/PageContainer';
import Hero from '../../components/Hero/Hero';
import WorkImage from '../../components/WorkImage/WorkImage';
import TextBlock from '../../components/TextBlock/TextBlock';
import PageContent from '../../components/PageContent/PageContent';

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
          <Header
            onClick={() => this.toggleMenu()}
            context="Taylor Zanke"
            contextLink="/"
            workDetail={`Work`}
            toggler="Menu"
          />
          <Hero
            className="homepage-hero"
            workTitle={NightDrawingsWork.title}
            workYear={NightDrawingsWork.year}
            workObject={NightDrawingsWork.object}
            workDims={NightDrawingsWork.dimensions}
            workInfo={NightDrawingsWork.information}
          />
          <PageContent>
            {NightDrawingsWork.images.map((image) =>
              <WorkImage light image={image}/>
            )}
          </PageContent>
          </PageContainer>
        </SiteWrapper>
      </>
    );
  }
}

export default NightDrawings;

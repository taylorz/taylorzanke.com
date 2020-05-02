import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './DirectionZine.scss';
import SiteWrapper from '../../components/SiteWrapper/SiteWrapper';
import PageContainer from '../../components/PageContainer/PageContainer';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Menu from '../../components/Menu/Menu';
import WorkImage from '../../components/WorkImage/WorkImage';
import TextBlock from '../../components/TextBlock/TextBlock';
import PageContent from '../../components/PageContent/PageContent';

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
          <Header onClick={() => this.toggleMenu()}/>
          <PageContainer className="work-page direction-zine" onClick={this.state.menuOpened ? () => this.toggleMenu() : null}>
          <Hero
            className="homepage-hero"
            workTitle={DirectionZineWork.title}
            workYear={DirectionZineWork.year}
            workObject={DirectionZineWork.object}
            workDims={DirectionZineWork.dimensions}
            workInfo={DirectionZineWork.information}
          />
          <PageContent>
            {DirectionZineWork.images.map((image) =>
              <WorkImage matte image={image}/>
            )}
          </PageContent>
          </PageContainer>
        </SiteWrapper>
      </>
    );
  }
}

export default DirectionZine;

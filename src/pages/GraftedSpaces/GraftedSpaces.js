import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './GraftedSpaces.scss';
import SiteWrapper from '../../components/SiteWrapper/SiteWrapper';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import PageContainer from '../../components/PageContainer/PageContainer';
import WorkImage from '../../components/WorkImage/WorkImage';
import TextBlock from '../../components/TextBlock/TextBlock';
import PageContent from '../../components/PageContent/PageContent';

import WORKS from '../../constants/works/works';

const GraftedSpacesWork = WORKS[1];

class GraftedSpaces extends Component {
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
          <PageContainer className="work-page grafted-spaces" onClick={this.state.menuOpened ? () => this.toggleMenu() : null}>
          <Header
            onClick={() => this.toggleMenu()}
            context="Taylor Zanke"
            contextLink="/"
            workDetail={`
              ${GraftedSpacesWork.title},
              ${GraftedSpacesWork.year},
              ${GraftedSpacesWork.object}.
              ${GraftedSpacesWork.dimensions}.
              ${GraftedSpacesWork.details}
            `}
            toggler="Menu"
          />
          <PageContent>
            {GraftedSpacesWork.images.map((image) =>
              <WorkImage
                light
                image={image}
              />
            )}
          </PageContent>
          </PageContainer>
        </SiteWrapper>
      </>
    );
  }
}

export default GraftedSpaces;

import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './SplicedHouse.scss';
import SiteWrapper from '../../components/SiteWrapper/SiteWrapper';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import PageContainer from '../../components/PageContainer/PageContainer';
import WorkImage from '../../components/WorkImage/WorkImage';
import TextBlock from '../../components/TextBlock/TextBlock';
import PageContent from '../../components/PageContent/PageContent';

import WORKS from '../../constants/works/works';

const SplicedHouseWork = WORKS[3];

class SplicedHouse extends Component {
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
          <PageContainer className="work-page spliced-house" onClick={this.state.menuOpened ? () => this.toggleMenu() : null}>
          <Header
            onClick={() => this.toggleMenu()}
            context="Taylor Zanke"
            contextLink="/"
            workDetail={`
              ${SplicedHouseWork.title},
              ${SplicedHouseWork.year},
              ${SplicedHouseWork.object}.
              ${SplicedHouseWork.dimensions}.
              ${SplicedHouseWork.details}
            `}
            toggler="Menu"
          />
          <PageContent>
            {SplicedHouseWork.images.map((image) =>
              <WorkImage
                matte
                image={image}
              />
            )}
            <TextBlock
              blockOne='By irregularly cutting a vernacular structure, and inserting space between, a house with definite extents and clear use becomes a space of infinite size and possibility. A new site is found, ready to be addressed, in between what was previously boundaried.'
            />
          </PageContent>
          </PageContainer>
        </SiteWrapper>
      </>
    );
  }
}

export default SplicedHouse;

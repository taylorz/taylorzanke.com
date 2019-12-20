import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './SplicedHouse.scss';
import SiteWrapper from '../../components/SiteWrapper/SiteWrapper';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import PageContainer from '../../components/PageContainer/PageContainer';
import WorkImage from '../../components/WorkImage/WorkImage';
import TextBlock from '../../components/TextBlock/TextBlock';

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
            light
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
          {SplicedHouseWork.images.map((image) =>
            <WorkImage
              matte
              dark
              image={image}
            />
          )}
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

export default SplicedHouse;

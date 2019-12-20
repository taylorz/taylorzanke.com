import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './SeveralSpeculative.scss';
import SiteWrapper from '../../components/SiteWrapper/SiteWrapper';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import PageContainer from '../../components/PageContainer/PageContainer';
import WorkImage from '../../components/WorkImage/WorkImage';
import TextBlock from '../../components/TextBlock/TextBlock';
import PageContent from '../../components/PageContent/PageContent';

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
          <Header
            onClick={() => this.toggleMenu()}
            context="Taylor Zanke"
            contextLink="/"
            workDetail={`
              ${SeveralSpeculativeWork.title},
              ${SeveralSpeculativeWork.year},
              ${SeveralSpeculativeWork.object}.
              ${SeveralSpeculativeWork.dimensions}.
              ${SeveralSpeculativeWork.details}
            `}
            toggler="Menu"
          />
          <PageContent>
            {SeveralSpeculativeWork.images.map((image) =>
              <WorkImage image={image}/>
            )}
          </PageContent>
          </PageContainer>
        </SiteWrapper>
      </>
    );
  }
}

export default SeveralSpeculative;

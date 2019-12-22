import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './TwoCitiesDiaryMP.scss';
import SiteWrapper from '../../components/SiteWrapper/SiteWrapper';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import PageContainer from '../../components/PageContainer/PageContainer';
import WorkImage from '../../components/WorkImage/WorkImage';
import TextBlock from '../../components/TextBlock/TextBlock';
import PageContent from '../../components/PageContent/PageContent';

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
        <Menu onClick={() => this.toggleMenu()}/>
        <PageContainer className="work-page two-cities-mp" onClick={this.state.menuOpened ? () => this.toggleMenu() : null}>
        <Header
          onClick={() => this.toggleMenu()}
          context="Taylor Zanke"
          contextLink="/"
          workDetail={`
            ${TwoCitiesDiaryMPWork.title},
            ${TwoCitiesDiaryMPWork.year},
            ${TwoCitiesDiaryMPWork.object}.
            ${TwoCitiesDiaryMPWork.dimensions}.
            ${TwoCitiesDiaryMPWork.details}
          `}
          toggler="Menu"
        />
        <PageContent>
          {TwoCitiesDiaryMPWork.images.map((image) =>
            <WorkImage
              image={image}
            />
          )}
          <TextBlock
            blockOne='Images were printed onto sheets of paper which were placed onto a table. A camera captured video of overlapping sheets of paper settling into place. Stills from the video make up the book, collapsing great phsyical distances and duplicating lingering frames.'
          />
        </PageContent>
        </PageContainer>
        </SiteWrapper>
      </>
    );
  }
}

export default TwoCitiesDiaryMP;

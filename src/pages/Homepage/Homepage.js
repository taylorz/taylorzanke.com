import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Homepage.scss';
import SiteWrapper from '../../components/SiteWrapper/SiteWrapper';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import PageContainer from '../../components/PageContainer/PageContainer';
import Work from '../../components/Work/Work';
import WorksGrid from '../../components/WorksGrid/WorksGrid';
import Fragments from '../../components/Fragments/Fragments';

import WORKS from '../../constants/works/works';
import FRAGMENTS from '../../constants/fragments/fragments';

const TransmissionsFrom = WORKS[0];
const GraftedSpaces = WORKS[1];
const NightDrawings = WORKS[2];
const SplicedHouse = WORKS[3];
const DirectionZine = WORKS[4];
const SeveralSpeculative = WORKS[5];
const StackWorks = WORKS[6];
const TwoCitiesDiary = WORKS[7];
const TwoCitiesDiaryMP = WORKS[8];

class Homepage extends Component {
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
          <PageContainer className="homepage" onClick={this.state.menuOpened ? () => this.toggleMenu() : null}>
          <Header onClick={() => this.toggleMenu()} contextDescription="Collected Works, Fragments, and Writings."/>
          <WorksGrid spacing={5}>
            <Grid item md={12} className="work-item">
              <Work
                full
                light
                hasCaption
                workId={TransmissionsFrom.id}
                workTitle={TransmissionsFrom.title}
                workYear={TransmissionsFrom.year}
                workImage={TransmissionsFrom.images[0]}
                workLink={TransmissionsFrom.link}
              />
            </Grid>
            <Grid item md={5} className="work-item">
              <Work
                full
                light
                hasCaption
                workId={NightDrawings.id}
                workTitle={NightDrawings.title}
                workYear={NightDrawings.year}
                workImage={NightDrawings.images[0]}
                workLink={NightDrawings.link}
              />
            </Grid>
            <Grid item md={5} className="work-item">
              <Work
                full
                light
                hasCaption
                workId={GraftedSpaces.id}
                workTitle={GraftedSpaces.title}
                workYear={GraftedSpaces.year}
                workImage={GraftedSpaces.images[3]}
                workLink={GraftedSpaces.link}
              />
            </Grid>
            <Grid item md={7} className="work-item">
              <Work
                full
                light
                hasCaption
                workId={SplicedHouse.id}
                workTitle={SplicedHouse.title}
                workYear={SplicedHouse.year}
                workImage={SplicedHouse.images[2]}
                workLink={SplicedHouse.link}
              />
            </Grid>
            <Grid item md={4} className="work-item">
              <Work
                full
                light
                hasCaption
                workId={DirectionZine.id}
                workTitle={DirectionZine.title}
                workYear={DirectionZine.year}
                workImage={DirectionZine.images[0]}
                workLink={DirectionZine.link}
              />
            </Grid>
            <Grid item md={7} className="work-item">
              <Work
                full
                light
                hasCaption
                workId={SeveralSpeculative.id}
                workTitle={SeveralSpeculative.title}
                workYear={SeveralSpeculative.year}
                workImage={SeveralSpeculative.images[0]}
                workLink={SeveralSpeculative.link}
              />
            </Grid>
            <Grid item md={6} className="work-item">
              <Work
                matte
                light
                hasCaption
                workId={TwoCitiesDiary.id}
                workTitle={TwoCitiesDiary.title}
                workYear={TwoCitiesDiary.year}
                workImage={TwoCitiesDiary.images[0]}
                workLink={TwoCitiesDiary.link}
              />
            </Grid>
            <Grid item md={6} className="work-item">
              <Work
                full
                light
                hasCaption
                workId={TwoCitiesDiaryMP.id}
                workTitle={TwoCitiesDiaryMP.title}
                workYear={TwoCitiesDiaryMP.year}
                workImage={TwoCitiesDiaryMP.images[0]}
                workLink={TwoCitiesDiaryMP.link}
              />
            </Grid>
          </WorksGrid>
          </PageContainer>
          <Menu onClick={() => this.toggleMenu()}/>
        </SiteWrapper>
      </>
    );
  }
}

export default Homepage;

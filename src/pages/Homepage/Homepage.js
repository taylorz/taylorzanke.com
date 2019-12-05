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

const HardMatter = WORKS[0];
const GraftedSpaces = WORKS[1];
const NightDrawings = WORKS[2];
const SplicedHouse = WORKS[3];
const DirectionZine = WORKS[4];
const SeveralSpeculative = WORKS[5];
const StackWorks = WORKS[6];
const TwoCitiesDiary = WORKS[7];

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
          <Header onClick={() => this.toggleMenu()}/>
          <Grid container className="hero-container">
            <Grid item xs={12} className="hero-writing">
              <p>It also considers travel to and from the site, and the uprooting of the practitioner in the pursuit of visits to the site, to be a critical and evolving aspect of the project. This method of practice allows the intimate past of the building to be coincident with the intimate past of the practitioner.</p>
            </Grid>
          </Grid>
          <WorksGrid spacing={4}>
            <Grid item md={4} className="work-item">
              <Work
                full
                light
                workId={NightDrawings.id}
                workTitle={NightDrawings.title}
                workYear={NightDrawings.year}
                workObject={NightDrawings.object}
                workDims={NightDrawings.dimensions}
                workDetails={NightDrawings.details}
                workImage={NightDrawings.images[0]}
                workLink={NightDrawings.link}
              />
            </Grid>
            <Grid item md={5} className="work-item">
              <Work
                full
                light
                workId={GraftedSpaces.id}
                workTitle={GraftedSpaces.title}
                workYear={GraftedSpaces.year}
                workObject={GraftedSpaces.object}
                workDims={GraftedSpaces.dimensions}
                workDetails={GraftedSpaces.details}
                workImage={GraftedSpaces.images[3]}
                workLink={GraftedSpaces.link}
              />
            </Grid>
            <Grid item md={8} className="work-item">
              <Work
                full
                light
                workId={SplicedHouse.id}
                workTitle={SplicedHouse.title}
                workYear={SplicedHouse.year}
                workObject={SplicedHouse.object}
                workDims={SplicedHouse.dimensions}
                workDetails={SplicedHouse.details}
                workImage={SplicedHouse.images[0]}
                workLink={SplicedHouse.link}
              />
            </Grid>
            <Grid item md={5} className="work-item">
              <Fragments

              />
            </Grid>
            <Grid item md={4} className="work-item">
              <Work
                full
                light
                workId={DirectionZine.id}
                workTitle={DirectionZine.title}
                workYear={DirectionZine.year}
                workObject={DirectionZine.object}
                workDims={DirectionZine.dimensions}
                workDetails={DirectionZine.details}
                workImage={DirectionZine.images[0]}
                workLink={DirectionZine.link}
              />
            </Grid>
            <Grid item md={6} className="work-item">
              <Work
                full
                light
                workId={SeveralSpeculative.id}
                workTitle={SeveralSpeculative.title}
                workYear={SeveralSpeculative.year}
                workObject={SeveralSpeculative.object}
                workDims={SeveralSpeculative.dimensions}
                workDetails={SeveralSpeculative.details}
                workImage={SeveralSpeculative.images[0]}
                workLink={SeveralSpeculative.link}
              />
            </Grid>
            <Grid item md={8} className="work-item">
              <Work
                full
                light
                workId={TwoCitiesDiary.id}
                workTitle={TwoCitiesDiary.title}
                workYear={TwoCitiesDiary.year}
                workObject={TwoCitiesDiary.object}
                workDims={TwoCitiesDiary.dimensions}
                workDetails={TwoCitiesDiary.details}
                workImage={TwoCitiesDiary.images[0]}
                workLink={TwoCitiesDiary.link}
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

import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './GraftedSpaces.scss';
import SiteWrapper from '../../components/SiteWrapper/SiteWrapper';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import PageContainer from '../../components/PageContainer/PageContainer';
import Work from '../../components/Work/Work';
import WorksGrid from '../../components/WorksGrid/WorksGrid';
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
          <PageContainer className="work-page grafted-spaces" onClick={this.state.menuOpened ? () => this.toggleMenu() : null}>
          <Header onClick={() => this.toggleMenu()}/>
          <Grid container className="work-overview">
            <Grid item md={2} className="overview-detail">
              <p>{GraftedSpacesWork.title}</p>
            </Grid>
            <Grid item md={2}/>
            <Grid item md={8} className="overview-description">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Grid>
          </Grid>
          <WorksGrid>
            <Grid item md={12} className="work-item">
              <Work
                full
                light
                workId={GraftedSpacesWork.id}
                workTitle={GraftedSpacesWork.title}
                workYear={GraftedSpacesWork.year}
                workObject={GraftedSpacesWork.object}
                workDims={GraftedSpacesWork.dimensions}
                workDetails={GraftedSpacesWork.details}
                workImage={GraftedSpacesWork.images[0]}
              />
              <Work
                full
                light
                workId={GraftedSpacesWork.id}
                workTitle={GraftedSpacesWork.title}
                workYear={GraftedSpacesWork.year}
                workObject={GraftedSpacesWork.object}
                workDims={GraftedSpacesWork.dimensions}
                workDetails={GraftedSpacesWork.details}
                workImage={GraftedSpacesWork.images[1]}
              />
              <Work
                full
                light
                workId={GraftedSpacesWork.id}
                workTitle={GraftedSpacesWork.title}
                workYear={GraftedSpacesWork.year}
                workObject={GraftedSpacesWork.object}
                workDims={GraftedSpacesWork.dimensions}
                workDetails={GraftedSpacesWork.details}
                workImage={GraftedSpacesWork.images[2]}
              />
              <Work
                full
                light
                workId={GraftedSpacesWork.id}
                workTitle={GraftedSpacesWork.title}
                workYear={GraftedSpacesWork.year}
                workObject={GraftedSpacesWork.object}
                workDims={GraftedSpacesWork.dimensions}
                workDetails={GraftedSpacesWork.details}
                workImage={GraftedSpacesWork.images[3]}
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

export default GraftedSpaces;

import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './TransmissionsFrom.scss';
import SiteWrapper from '../../components/SiteWrapper/SiteWrapper';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import PageContainer from '../../components/PageContainer/PageContainer';
import Work from '../../components/Work/Work';
import WorksGrid from '../../components/WorksGrid/WorksGrid';
import Caption from '../../components/Caption/Caption';
import WORKS from '../../constants/works/works';

const TransmissionsFromWork = WORKS[0];

class TransmissionsFrom extends Component {
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
          <WorksGrid>
            <Grid item xs={12} className="work-item">
            { TransmissionsFromWork.images.map((workImage) =>
              <Work
                matte
                light
                workImage={workImage}
              />
            )}
            </Grid>
          </WorksGrid>
          </PageContainer>
          <Menu onClick={() => this.toggleMenu()}/>
        </SiteWrapper>
      </>
    );
  }
}

export default TransmissionsFrom;

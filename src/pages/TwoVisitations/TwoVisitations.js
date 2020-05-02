import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './TwoVisitations.scss';
import SiteWrapper from '../../components/SiteWrapper/SiteWrapper';
import PageContainer from '../../components/PageContainer/PageContainer';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Menu from '../../components/Menu/Menu';
import WorkImage from '../../components/WorkImage/WorkImage';
import TextBlock from '../../components/TextBlock/TextBlock';
import PageContent from '../../components/PageContent/PageContent';

import WORKS from '../../constants/works/works';

const TwoVisitationsWork = WORKS[6];

class TwoVisitations extends Component {
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
          <PageContainer className="two-visitations">
          <Grid container className="project-content">
            <Grid item xs={12} md={6} className="project-images-list">
            {TwoVisitationsWork.images.map((image) =>
              <div className="project-item">
                <WorkImage
                  matte
                  image={image}
                />
              </div>
            )}
            </Grid>
            <Grid item xs={12} md={6} className="project-information">
              <div className="project-statement">
                <p>Two Visitations Reader is a collection of spaces revisited. I snapped the same picture on multiple occasions, often retracing my steps. Idieosyncratic alignment occurs not only on the page, but over time.</p>
              </div>
              <Grid container className="project-data">
                <Grid item xs={12} md={6} className="data-copy">
                  <span className="project-name">{TwoVisitationsWork.title}</span>
                  {TwoVisitationsWork.object}. {TwoVisitationsWork.dimensions}. {TwoVisitationsWork.pages}.
                  <span className="data-information"> {TwoVisitationsWork.information}. </span>
                  ({TwoVisitationsWork.year})
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          </PageContainer>
        </SiteWrapper>
      </>
    );
  }
}

export default TwoVisitations;

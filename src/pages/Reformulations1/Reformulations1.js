
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Reformulations1.scss';
import SiteWrapper from '../../components/SiteWrapper/SiteWrapper';
import PageContainer from '../../components/PageContainer/PageContainer';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Menu from '../../components/Menu/Menu';
import WorkImage from '../../components/WorkImage/WorkImage';
import TextBlock from '../../components/TextBlock/TextBlock';
import PageContent from '../../components/PageContent/PageContent';

import WORKS from '../../constants/works/works';
import FRAGMENTS from '../../constants/fragments/fragments';

const Reformulations1Work = WORKS[5];

class Reformulations1 extends Component {
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
          {Reformulations1Work.images.map((image) =>
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
              <p>Reformulations 1 combines many sources to create a whole. They are images and drawings completed across different times.</p>
            </div>
            <Grid container className="project-data">
              <Grid item xs={12} md={6} className="data-copy">
                <span className="project-name">{Reformulations1Work.title}</span>
                {Reformulations1Work.object}. {Reformulations1Work.dimensions}.
                <span className="data-information"> {Reformulations1Work.information}. </span>
                ({Reformulations1Work.year})
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

export default Reformulations1;

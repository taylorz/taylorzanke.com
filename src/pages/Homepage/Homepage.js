import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Homepage.scss';
import SiteWrapper from '../../components/SiteWrapper/SiteWrapper';
import Menu from '../../components/Menu/Menu';
import PageContainer from '../../components/PageContainer/PageContainer';
import Whole from '../../components/Whole/Whole';
import Fragment from '../../components/Fragment/Fragment';

import TwoCitiesReader1 from '../../assets/images/1a.png';
import TwoCitiesReader2 from '../../assets/images/1b.png';
import TwoCitiesReader3 from '../../assets/images/1c.png';
import TwoCitiesReader4 from '../../assets/images/1d.png';
import DrawingsModels1 from '../../assets/images/3b.png';
import DrawingsModels2 from '../../assets/images/3c.png';
import SpecImprovements1 from '../../assets/images/test-1.png';
import Stone from '../../assets/images/stone.png';

class Homepage extends Component {
  render() {
    return (
      <>
        <SiteWrapper>
          <PageContainer className="homepage">
            <Whole matte workImage={TwoCitiesReader1} title="Two Cities Diary" year="2014" object="Book"/>
            <Grid container className="fragments" justify="space-between">
              <Grid item md={6} xs={12} className="fragment-container">
                <Fragment fragmentImage={DrawingsModels1} title="Two Cities Reader" year="2014"/>
              </Grid>
              <Grid item md={3} xs={12} className="fragment-container">
                <Fragment fragmentImage={Stone} title="Two Cities Reader" year="2014"/>
              </Grid>
            </Grid>
            <Whole full workImage={SpecImprovements1} title="Two Cities Diary" year="2014" object="Book"/>
            <Grid container className="fragments" justify="space-between">
              <Grid item md={6} xs={12} className="fragment-container">
                <Fragment fragmentImage={DrawingsModels2} title="Two Cities Reader" year="2014"/>
              </Grid>
            </Grid>
            <Whole matte dark workImage={TwoCitiesReader3} title="Two Cities Diary" year="2014" object="Book"/>
          </PageContainer>
        </SiteWrapper>
      </>
    );
  }
}

export default Homepage;

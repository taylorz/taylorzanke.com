import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Homepage.scss';
import PageContainer from '../../components/PageContainer/PageContainer';
import Whole from '../../components/Whole/Whole';
import Fragment from '../../components/Fragment/Fragment';

import TwoCitiesReader1 from '../../assets/images/1a.png';
import TwoCitiesReader2 from '../../assets/images/1b.png';
import DrawingsModels1 from '../../assets/images/3b.png';
import DrawingsModels2 from '../../assets/images/3c.png';

class Homepage extends Component {
  render() {
    return (
      <>
        <PageContainer className="homepage">
          <Whole workImage={TwoCitiesReader1} title="Two Cities Diary" year="2014"/>
          <Grid container className="fragments" justify="space-between">
            <Grid item md={4} xs={12} className="fragment-container">
              <Fragment fragmentImage={DrawingsModels1} title="Two Cities Reader" year="2014"/>
            </Grid>
            <Grid item md={6} xs={12} className="fragment-container">
              <Fragment fragmentImage={DrawingsModels2} title="Two Cities Reader" year="2014"/>
            </Grid>
          </Grid>
          <Whole workImage={TwoCitiesReader2}/>
        </PageContainer>
      </>
    );
  }
}

export default Homepage;

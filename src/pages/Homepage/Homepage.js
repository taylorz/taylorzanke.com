import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Homepage.scss';
import SiteWrapper from '../../components/SiteWrapper/SiteWrapper';
import Menu from '../../components/Menu/Menu';
import PageContainer from '../../components/PageContainer/PageContainer';
import Whole from '../../components/Whole/Whole';
import Fragments from '../../components/Fragments/Fragments';

import WORKS from '../../constants/works/works';
import FRAGMENTS from '../../constants/fragments/fragments';

const TwoCitiesDiary = WORKS[0];
const Model = WORKS[1];

class Homepage extends Component {
  render() {
    return (
      <>
        <SiteWrapper>
          <PageContainer className="homepage">
            <Whole
              matte
              workId={TwoCitiesDiary.id}
              workImage={TwoCitiesDiary.images[0]}
            />
            <Fragments
              fragment1={FRAGMENTS[0]}
              fragment2={FRAGMENTS[1]}
            />
            <Whole
              matte
              light
              workId={TwoCitiesDiary.id}
              workImage={TwoCitiesDiary.images[2]}
            />
          </PageContainer>
          <Menu/>
        </SiteWrapper>
      </>
    );
  }
}

export default Homepage;

import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './TwoCitiesDiaryMP.scss';
import SiteWrapper from '../../components/SiteWrapper/SiteWrapper';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Menu from '../../components/Menu/Menu';
import PageContainer from '../../components/PageContainer/PageContainer';
import WorkImage from '../../components/WorkImage/WorkImage';
import TextBlock from '../../components/TextBlock/TextBlock';
import PageContent from '../../components/PageContent/PageContent';
import ProjectImagesList from '../../components/ProjectImagesList/ProjectImagesList';
import ProjectInformation from '../../components/ProjectInformation/ProjectInformation';

import WORKS from '../../constants/works/works';

const TwoCitiesDiaryMPWork = WORKS[4];

class TwoCitiesDiaryMP extends Component {
  render() {
    return (
      <>
        <SiteWrapper>
        <PageContainer className="work-page two-cities-mp">
          <PageContent>
            <ProjectImagesList
              projectArray={TwoCitiesDiaryMPWork}
            />
            <ProjectInformation
              projectArray={TwoCitiesDiaryMPWork}
            />
          </PageContent>
        </PageContainer>
        </SiteWrapper>
      </>
    );
  }
}

export default TwoCitiesDiaryMP;

import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './TwoCitiesDiaryHNY.scss';
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

const TwoCitiesDiaryHNYWork = WORKS[3];

class TwoCitiesDiary extends Component {
  render() {
    return (
      <>
        <SiteWrapper>
          <PageContainer className="work-page two-cities-hny">
            <PageContent>
              <ProjectImagesList
                projectArray={TwoCitiesDiaryHNYWork}
                isMatte={false}
              />
              <ProjectInformation
                projectArray={TwoCitiesDiaryHNYWork}
              />
            </PageContent>
          </PageContainer>
        </SiteWrapper>
      </>
    );
  }
}

export default TwoCitiesDiary;

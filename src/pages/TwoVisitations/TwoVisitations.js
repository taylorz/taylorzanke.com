import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './TwoVisitations.scss';
import SiteWrapper from '../../components/SiteWrapper/SiteWrapper';
import PageContainer from '../../components/PageContainer/PageContainer';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Menu from '../../components/Menu/Menu';
import TextBlock from '../../components/TextBlock/TextBlock';
import PageContent from '../../components/PageContent/PageContent';
import ProjectImagesList from '../../components/ProjectImagesList/ProjectImagesList';
import ProjectInformation from '../../components/ProjectInformation/ProjectInformation';

import WORKS from '../../constants/works/works';

const TwoVisitationsWork = WORKS[6];

class TwoVisitations extends Component {
  render() {
    return (
      <>
        <SiteWrapper>
          <PageContainer className="two-visitations">
          <PageContent>
            <ProjectImagesList
              projectArray={TwoVisitationsWork}
              isMatte={true}
            />
            <ProjectInformation
              projectArray={TwoVisitationsWork}
            />
          </PageContent>
          </PageContainer>
        </SiteWrapper>
      </>
    );
  }
}

export default TwoVisitations;

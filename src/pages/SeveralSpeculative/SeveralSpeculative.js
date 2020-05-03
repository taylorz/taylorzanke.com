import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './SeveralSpeculative.scss';
import SiteWrapper from '../../components/SiteWrapper/SiteWrapper';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Menu from '../../components/Menu/Menu';
import PageContainer from '../../components/PageContainer/PageContainer';
import WorkImage from '../../components/WorkImage/WorkImage';
import WorkDetail from '../../components/WorkDetail/WorkDetail';
import TextBlock from '../../components/TextBlock/TextBlock';
import PageContent from '../../components/PageContent/PageContent';
import ProjectImagesList from '../../components/ProjectImagesList/ProjectImagesList';
import ProjectInformation from '../../components/ProjectInformation/ProjectInformation';

import WORKS from '../../constants/works/works';

const SeveralSpeculativeWork = WORKS[2];

class SeveralSpeculative extends Component {
  render() {
    return (
      <>
        <SiteWrapper>
          <PageContainer className="work-page several-speculative">
            <PageContent>
              <ProjectImagesList
                projectArray={SeveralSpeculativeWork}
              />
              <ProjectInformation
                projectArray={SeveralSpeculativeWork}
              />
            </PageContent>
          </PageContainer>
        </SiteWrapper>
      </>
    );
  }
}

export default SeveralSpeculative;

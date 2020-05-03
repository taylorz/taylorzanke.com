import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './DirectionZine.scss';
import SiteWrapper from '../../components/SiteWrapper/SiteWrapper';
import PageContainer from '../../components/PageContainer/PageContainer';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Menu from '../../components/Menu/Menu';
import WorkImage from '../../components/WorkImage/WorkImage';
import TextBlock from '../../components/TextBlock/TextBlock';
import PageContent from '../../components/PageContent/PageContent';
import ProjectImagesList from '../../components/ProjectImagesList/ProjectImagesList';
import ProjectInformation from '../../components/ProjectInformation/ProjectInformation';

import WORKS from '../../constants/works/works';

const DirectionZineWork = WORKS[1];

class DirectionZine extends Component {
  render() {
    return (
      <>
        <SiteWrapper>
          <PageContainer className="work-page direction-zine">
            <PageContent>
              <ProjectImagesList
                projectArray={DirectionZineWork}
                isMatte={true}
                isDark={true}
              />
              <ProjectInformation
                projectArray={DirectionZineWork}
              />
            </PageContent>
          </PageContainer>
        </SiteWrapper>
      </>
    );
  }
}

export default DirectionZine;

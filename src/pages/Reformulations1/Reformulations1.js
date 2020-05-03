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
import ProjectImagesList from '../../components/ProjectImagesList/ProjectImagesList';
import ProjectInformation from '../../components/ProjectInformation/ProjectInformation';

import WORKS from '../../constants/works/works';
import FRAGMENTS from '../../constants/fragments/fragments';

const Reformulations1Work = WORKS[5];

class Reformulations1 extends Component {
  render() {
    return (
      <>
      <SiteWrapper>
        <PageContainer className="two-visitations">
          <PageContent>
            <ProjectImagesList
              projectArray={Reformulations1Work}
              isMatte={true}
            />
            <ProjectInformation
              projectArray={Reformulations1Work}
            />
          </PageContent>
        </PageContainer>
      </SiteWrapper>
      </>
    );
  }
}

export default Reformulations1;

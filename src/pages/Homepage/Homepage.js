import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Homepage.scss';
import SiteWrapper from '../../components/SiteWrapper/SiteWrapper';
import PageContainer from '../../components/PageContainer/PageContainer';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import WorkImage from '../../components/WorkImage/WorkImage';
import TextBlock from '../../components/TextBlock/TextBlock';

import WORKS from '../../constants/works/works';
import FRAGMENTS from '../../constants/fragments/fragments';

const TransmissionsFrom = WORKS[0];
const GraftedSpaces = WORKS[1];
const NightDrawings = WORKS[2];
const SplicedHouse = WORKS[3];
const DirectionZine = WORKS[4];
const SeveralSpeculative = WORKS[5];
const StackWorks = WORKS[6];
const TwoCitiesDiaryHNY = WORKS[7];
const TwoCitiesDiaryMP = WORKS[8];

class Homepage extends Component {
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
          <PageContainer className="homepage">
            <Header onClick={() => this.toggleMenu()} context="Taylor Zanke" contextLink="/" what="Index" toggler="Menu"/>
            <WorkImage
              image={TransmissionsFrom.images[4]}
              link={TransmissionsFrom.link}
            />
            <WorkImage
              matte
              image={GraftedSpaces.images[2]}
              link={GraftedSpaces.link}
            />
            <WorkImage
              matte
              image={NightDrawings.images[0]}
              link={NightDrawings.link}
            />
            <WorkImage
              matte
              image={SplicedHouse.images[0]}
              link={SplicedHouse.link}
            />
            <WorkImage
              matte
              image={DirectionZine.images[0]}
              link={DirectionZine.link}
            />
            <WorkImage
              image={SeveralSpeculative.images[0]}
              link={SeveralSpeculative.link}
            />
            <WorkImage
              matte
              image={TwoCitiesDiaryHNY.images[0]}
              link={TwoCitiesDiaryHNY.link}
            />
            <WorkImage
              image={TwoCitiesDiaryMP.images[0]}
              link={TwoCitiesDiaryMP.link}
            />
            <TextBlock
              blockOne='Taylor Zanke is an artist and designer who makes drawings, models, books, photographs, and recordings. He seeks to uncover the ways in which Space travels through Time, revealing potential, dismantling inevitability.'
              blockTwo='He holds a BFA from Parsons The New School for Design, and a Masters of Architecture and Masters of Science in Real Estate Development from Columbia University.'
              blockThree='This website is a depository which contains found and invented artefacts of a varied type presented within a rigid bounds. The 8.5" x 11" (US Letter) page, in its physical spatial dimensionality, is helpfully understood here to also bear conceptual significance. Fragments of a processual imaginary are materially indexed, and as a result are conceptually demarcated.'
            />
          </PageContainer>
        </SiteWrapper>
      </>
    );
  }
}

export default Homepage;

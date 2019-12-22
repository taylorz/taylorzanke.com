import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Homepage.scss';
import SiteWrapper from '../../components/SiteWrapper/SiteWrapper';
import PageContainer from '../../components/PageContainer/PageContainer';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import WorkImage from '../../components/WorkImage/WorkImage';
import TextBlock from '../../components/TextBlock/TextBlock';
import PageContent from '../../components/PageContent/PageContent';

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
            <Header onClick={() => this.toggleMenu()} context="Taylor Zanke" contextLink="/" workDetail="Books and drawings"/>
            <PageContent>
            <WorkImage
              image={TransmissionsFrom.images[1]}
              link={TransmissionsFrom.link}
            />
            <WorkImage
              image={SeveralSpeculative.images[2]}
              link={SeveralSpeculative.link}
            />
            {/*
            <WorkImage
              light
              image={GraftedSpaces.images[2]}
              link={GraftedSpaces.link}
            />
            */}
            <WorkImage
              matte
              image={NightDrawings.images[0]}
              link={NightDrawings.link}
            />
            <WorkImage
              image={TwoCitiesDiaryMP.images[2]}
              link={TwoCitiesDiaryMP.link}
            />
            <WorkImage
              matte
              image={SplicedHouse.images[0]}
              link={SplicedHouse.link}
            />
            {/*
              <WorkImage
                matte
                image={DirectionZine.images[0]}
                link={DirectionZine.link}
              />
            */}

              <WorkImage
                matte
                image={TwoCitiesDiaryHNY.images[0]}
                link={TwoCitiesDiaryHNY.link}
              />

            <TextBlock
              blockOne='Taylor Zanke is an artist and designer working in New York City. He seeks to uncover the ways in which Space travels through Time, revealing potential, dismantling inevitability.'
              blockTwo='He produces drawings, models, or photographs of imagined or real spaces, some of which are included in singular books. Like a diary or journal might, these books expose a thinking—making through the unique idiosyncracies that arise out of their individual production. Like the model does in architectural practice, these books outline an idea, and approximate a reality, demonstrating this through particular material, imagistic, or compositional choices.'
              blockThree='He holds a BFA from Parsons the New School for Design, and a Masters of Architecture and Masters of Science in Real Estate Development from Columbia University.'
              blockFour='“The mason was struck by the fact that expended energy does not get lost; it remains stored for many years, never diminished, latent in the block of stone, until one day it happens that the block slides off the roof and falls on the head of a passerby, killing him.”'
            />
            </PageContent>
          </PageContainer>
        </SiteWrapper>
      </>
    );
  }
}

export default Homepage;

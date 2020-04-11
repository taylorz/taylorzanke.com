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

import WORKS from '../../constants/works/works';

const SeveralSpeculativeWork = WORKS[5];

class SeveralSpeculative extends Component {
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
          <PageContainer className="work-page several-speculative" onClick={this.state.menuOpened ? () => this.toggleMenu() : null}>
          <Header
            onClick={() => this.toggleMenu()}
            context="Taylor Zanke"
            contextLink="/"
            workDetail={`Work`}
            toggler="Menu"
          />
          <Hero
            className="homepage-hero"
            workTitle={SeveralSpeculativeWork.title}
            workYear={SeveralSpeculativeWork.year}
            workObject={SeveralSpeculativeWork.object}
            workDims={SeveralSpeculativeWork.dimensions}
            workInfo={SeveralSpeculativeWork.information}
          />
          <PageContent>
            {SeveralSpeculativeWork.images.map((image) =>
              <WorkImage image={image}/>
            )}
            <Grid container className="work-details-container" spacing={2}>
              {SeveralSpeculativeWork.details.map((detail) =>
                <WorkDetail detail={detail}/>
              )}
            </Grid>
            <TextBlock
              textLabel="Work statement"
              textContent='This project explores the idea of developing spatial proposals for the place in which one resides and the ways in which one’s inner life can act in concert with processes of design. While my mother’s health ailed and recovered, I spent time at my family home as her sole caregiver. Throughout this period I developed 9 sectional models of my family home and a singular book. Through these works I sought to achieve a number of artistic and architectural outcomes. My primary investigations addressed the relationship which I had to the interior of the home from both an architectural and emotional perspective. Through a process of surveying the suburban home and constructing its boundary, in models, out of cardboard I created a psychic space which I could inhabit and manipulate. I designed variations of rooms through placement of internal structural members, interior cladding, and placement of apertures. I worked intuitively, allowing the materials I was using, many of which were found in the home, to guide the outcome of the design. In so doing I created “improvements” to a space representative of the interior in which I lived, while diaristically expressing my own interior life through a language of architecture. The models retain a fragmented quality, where misregistrations between interior openings and exterior openings occur, and structure creates rhythmic and layered effects. At the end of my stay at home the models were photographed and included in the project’s singular book. In addition to the photographs of the models I included several images which I had taken throughout the period of time at home, all of which evoke sensations of quiet and solitude.'
            />
          </PageContent>
          </PageContainer>
        </SiteWrapper>
      </>
    );
  }
}

export default SeveralSpeculative;

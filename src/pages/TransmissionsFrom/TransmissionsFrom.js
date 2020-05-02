import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './TransmissionsFrom.scss';
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

const TransmissionsFromWork = WORKS[0];

class TransmissionsFrom extends Component {
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
          <Header onClick={() => this.toggleMenu()}/>
          <PageContainer className="work-page transmissions-from" onClick={this.state.menuOpened ? () => this.toggleMenu() : null}>
          <PageContent>
              {TransmissionsFromWork.images.map((image) =>
                <WorkImage image={image}/>
              )}
              <Grid container className="work-details-container" spacing={2}>
                {TransmissionsFromWork.details.map((detail) =>
                  <WorkDetail detail={detail}/>
                )}
              </Grid>
              <TextBlock
                textLabel="Work statement"
                textContent='The 93 composite drawings included in this project were produced in order to achieve two outcomes, each of which relates to the broader exercise of expanding the forms of architectural practice which I am committed to. The first desired outcome was to provide a context for the practice of architectural intuitions and sensibility. The second desired outcome was to generate drawn conditions which could encourage further spatial development, to produce possibility. The first outcome is addressed through both the volume of drawings, the fast speed with which they were produced, and the order of operations used to render the layered composition seen in the final works. For each drawing an intuitive, graphite, line was first used to introduce a gestural context and was followed by several inkjet printed layers of hard line drawing. Layers of black ink were deposited on the page as the drawing was run through a printer several times, each time receiving more depth through the use of several types of line. This encouraged the practice of architectural intuition through a “call and response” process, embodied in the dialogue between the two qualities of line and the process of their realization, printing. The second outcome is achieved through the interpretation of each drawing’s final composition, where, as intuitions accrete in progressively more stable manifestations, proposals for space emerge. The composition of each drawing suggests a different spatial reality ready for further analysis, each formulating boundaries, enclosures, or masses by its own gravitational pull. My intention for these drawings is that they are revisited when needed and become characters in my practice for years to come. I bound these by hand into a singular book, which I printed at home, as a mode of further stabilizing a precarious intuition, and transmitting the decaying gesture into the future.'
              />
            </PageContent>
          </PageContainer>
        </SiteWrapper>
      </>
    );
  }
}

export default TransmissionsFrom;

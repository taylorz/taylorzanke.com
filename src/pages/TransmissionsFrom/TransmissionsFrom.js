import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './TransmissionsFrom.scss';
import SiteWrapper from '../../components/SiteWrapper/SiteWrapper';
import Header from '../../components/Header/Header';
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
          <PageContainer className="work-page transmissions-from" onClick={this.state.menuOpened ? () => this.toggleMenu() : null}>
          <Header
            onClick={() => this.toggleMenu()}
            context="Taylor Zanke"
            contextLink="/"
            workDetail={`
              ${TransmissionsFromWork.title},
              ${TransmissionsFromWork.year},
              ${TransmissionsFromWork.object}.
              ${TransmissionsFromWork.dimensions}.
              ${TransmissionsFromWork.information}
            `}
            toggler="Menu"
          />
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
                blockOne='Like a building turning to ruin, a gesture is the result of many unseen forces. My gestures start as lines on the page, I am making uncertain boundaries, shaped by feeling, guided by anticipation. The building feels time, its structure turns to gesture by weight of gravity, and by use. Rough edges replace smooth ones and what was previously concealed becomes visible. In serendipitous co-incidence a building and a gesture: registers of unseen force, transmissions from rare space.'
                blockTwo='Here is the site for sensitive treatment of a delicate balance. It is the site for an exercise in preservation. Left any longer the building could turn to dust, and the feeling which shapes my line could pass. Both are thresholds where, once crossed, it is difficult to return. Simple strucutres turning into dust, turning into gesture. Gestures suggesting solidity, revealing potential.'
                blockThree='It’s impossible to replace what is there. To survey and rationalize would be to destroy. The decaying building and the gesture are worth looking at together precisely because of their proneness to entropy. The task is not to suppress the ruining of the building or prevent the fleetingness of feeling, but to observe and respond to their path. What can remain visible of a decaying gesture even once its source has long disappeared?'
              />
            </PageContent>
          </PageContainer>
        </SiteWrapper>
      </>
    );
  }
}

export default TransmissionsFrom;

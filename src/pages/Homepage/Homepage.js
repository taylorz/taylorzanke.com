import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Homepage.scss';
import SiteWrapper from '../../components/SiteWrapper/SiteWrapper';
import Menu from '../../components/Menu/Menu';
import PageContainer from '../../components/PageContainer/PageContainer';
import Whole from '../../components/Whole/Whole';
import Fragments from '../../components/Fragments/Fragments';

import WORKS from '../../constants/works/works';
import FRAGMENTS from '../../constants/fragments/fragments';

const TwoCitiesDiary = WORKS[0];
const SeveralSpeculative = WORKS[1];
const DirectionZine = WORKS[2];
const Model = WORKS[3];

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
          <PageContainer className="homepage" onClick={() => this.toggleMenu()}>
            <Whole
              matte
              workId={TwoCitiesDiary.id}
              workImage={TwoCitiesDiary.images[0]}
            />
            <Fragments
              two
              fragment1={FRAGMENTS[0]}
              fragment2={FRAGMENTS[1]}
            />
            <Whole
              matte
              light
              workId={TwoCitiesDiary.id}
              workImage={TwoCitiesDiary.images[2]}
            />
            <Fragments
              two
              fragment1={FRAGMENTS[3]}
              fragment2={FRAGMENTS[4]}
            />
            <Whole
              matte
              dark
              workId={TwoCitiesDiary.id}
              workImage={TwoCitiesDiary.images[1]}
            />
            <Fragments
              three
              fragment1={FRAGMENTS[5]}
              fragment2={FRAGMENTS[2]}
              fragment3={FRAGMENTS[3]}
            />
            <Whole
              matte
              light
              workId={Model.id}
              workImage={Model.images[3]}
            />
          </PageContainer>
          <Menu/>
        </SiteWrapper>
      </>
    );
  }
}

export default Homepage;

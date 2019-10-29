import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Homepage.scss';
import SiteWrapper from '../../components/SiteWrapper/SiteWrapper';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import PageContainer from '../../components/PageContainer/PageContainer';
import Whole from '../../components/Whole/Whole';
import Fragments from '../../components/Fragments/Fragments';

import WORKS from '../../constants/works/works';
import FRAGMENTS from '../../constants/fragments/fragments';

const TwoCitiesDiary = WORKS[0];
const SeveralSpeculative = WORKS[1];
const DirectionZine = WORKS[2];
const GraftedSpaces = WORKS[3];
const HardMatter = WORKS[4];

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
          <PageContainer className="homepage" onClick={this.state.menuOpened ? () => this.toggleMenu() : null}>
          <Header onClick={() => this.toggleMenu()}/>
            <Whole
              matte
              workId={TwoCitiesDiary.id}
              workTitle={TwoCitiesDiary.title}
              workYear={TwoCitiesDiary.year}
              workObject={TwoCitiesDiary.object}
              workDims={TwoCitiesDiary.dimensions}
              workDetails={TwoCitiesDiary.details}
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
              workTitle={TwoCitiesDiary.title}
              workYear={TwoCitiesDiary.year}
              workObject={TwoCitiesDiary.object}
              workDims={TwoCitiesDiary.dimensions}
              workDetails={TwoCitiesDiary.details}
              workImage={TwoCitiesDiary.images[2]}
            />
            <Fragments
              one
              fragment1={FRAGMENTS[3]}
              fragment2={FRAGMENTS[4]}
            />
            <Whole
              matte
              dark
              workId={TwoCitiesDiary.id}
              workTitle={TwoCitiesDiary.title}
              workYear={TwoCitiesDiary.year}
              workObject={TwoCitiesDiary.object}
              workDims={TwoCitiesDiary.dimensions}
              workDetails={TwoCitiesDiary.details}
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
              workId={GraftedSpaces.id}
              workTitle={GraftedSpaces.title}
              workYear={GraftedSpaces.year}
              workObject={GraftedSpaces.object}
              workDims={GraftedSpaces.dimensions}
              workDetails={GraftedSpaces.details}
              workImage={GraftedSpaces.images[3]}
            />
            <Fragments
              two
              fragment1={FRAGMENTS[1]}
              fragment2={FRAGMENTS[3]}
            />
            <Whole
              matte
              dark
              workId={DirectionZine.id}
              workTitle={DirectionZine.title}
              workYear={DirectionZine.year}
              workObject={DirectionZine.object}
              workDims={DirectionZine.dimensions}
              workDetails={DirectionZine.details}
              workImage={DirectionZine.images[2]}
            />
            <Fragments
              one
              fragment1={FRAGMENTS[2]}
            />
            <Whole
              matte
              dark
              workId={HardMatter.id}
              workTitle={HardMatter.title}
              workYear={HardMatter.year}
              workObject={HardMatter.object}
              workDims={HardMatter.dimensions}
              workDetails={HardMatter.details}
              workImage={HardMatter.images[0]}
            />
          </PageContainer>
          <Menu/>
        </SiteWrapper>
      </>
    );
  }
}

export default Homepage;

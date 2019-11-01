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

const HardMatter = WORKS[0];
const GraftedSpaces = WORKS[1];
const NightDrawings = WORKS[2];
const SplicedHouse = WORKS[3];
const DirectionZine = WORKS[4];
const SeveralSpeculative = WORKS[5];
const StackWorks = WORKS[6];
const TwoCitiesDiary = WORKS[7];

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
              workId={SplicedHouse.id}
              workTitle={SplicedHouse.title}
              workYear={SplicedHouse.year}
              workObject={SplicedHouse.object}
              workDims={SplicedHouse.dimensions}
              workDetails={SplicedHouse.details}
              workImage={SplicedHouse.images[0]}
            />
            <Fragments
              two
              fragment1={FRAGMENTS[0]}
              fragment2={FRAGMENTS[1]}
            />
            <Whole
              matte
              workId={SplicedHouse.id}
              workTitle={SplicedHouse.title}
              workYear={SplicedHouse.year}
              workObject={SplicedHouse.object}
              workDims={SplicedHouse.dimensions}
              workDetails={SplicedHouse.details}
              workImage={SplicedHouse.images[1]}
            />
            <Fragments
              one
              fragment1={FRAGMENTS[2]}
            />
            <Whole
              matte
              workId={SplicedHouse.id}
              workTitle={SplicedHouse.title}
              workYear={SplicedHouse.year}
              workObject={SplicedHouse.object}
              workDims={SplicedHouse.dimensions}
              workDetails={SplicedHouse.details}
              workImage={SplicedHouse.images[2]}
            />
            <Fragments
              three
              fragment1={FRAGMENTS[3]}
              fragment2={FRAGMENTS[4]}
              fragment3={FRAGMENTS[5]}
            />
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
              one
              fragment1={FRAGMENTS[6]}
            />
            <Whole
              matte
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
              fragment1={FRAGMENTS[7]}
              fragment2={FRAGMENTS[8]}
              fragment3={FRAGMENTS[10]}
            />
            <Whole
              matte
              workId={TwoCitiesDiary.id}
              workTitle={TwoCitiesDiary.title}
              workYear={TwoCitiesDiary.year}
              workObject={TwoCitiesDiary.object}
              workDims={TwoCitiesDiary.dimensions}
              workDetails={TwoCitiesDiary.details}
              workImage={TwoCitiesDiary.images[3]}
            />
            <Fragments
              two
              fragment1={FRAGMENTS[15]}
              fragment2={FRAGMENTS[18]}
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
              workImage={GraftedSpaces.images[0]}
            />
            <Fragments
              three
              fragment1={FRAGMENTS[19]}
              fragment2={FRAGMENTS[20]}
              fragment3={FRAGMENTS[21]}
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
              workImage={GraftedSpaces.images[1]}
            />
            <Fragments
              one
              fragment1={FRAGMENTS[22]}
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
              workImage={GraftedSpaces.images[2]}
            />
            <Fragments
              one
              fragment1={FRAGMENTS[23]}
            />
            <Whole
              matte
              light
              workId={NightDrawings.id}
              workTitle={NightDrawings.title}
              workYear={NightDrawings.year}
              workObject={NightDrawings.object}
              workDims={NightDrawings.dimensions}
              workDetails={NightDrawings.details}
              workImage={NightDrawings.images[0]}
            />
            <Fragments
              two
              fragment1={FRAGMENTS[24]}
              fragment2={FRAGMENTS[25]}
            />
            <Whole
              matte
              light
              workId={NightDrawings.id}
              workTitle={NightDrawings.title}
              workYear={NightDrawings.year}
              workObject={NightDrawings.object}
              workDims={NightDrawings.dimensions}
              workDetails={NightDrawings.details}
              workImage={NightDrawings.images[3]}
            />
            <Fragments
              one
              fragment1={FRAGMENTS[26]}
            />
            <Whole
              matte
              light
              workId={NightDrawings.id}
              workTitle={NightDrawings.title}
              workYear={NightDrawings.year}
              workObject={NightDrawings.object}
              workDims={NightDrawings.dimensions}
              workDetails={NightDrawings.details}
              workImage={NightDrawings.images[7]}
            />
            <Fragments
              one
              fragment1={FRAGMENTS[27]}
            />
            <Whole
              matte
              dark
              workId={SeveralSpeculative.id}
              workTitle={SeveralSpeculative.title}
              workYear={SeveralSpeculative.year}
              workObject={SeveralSpeculative.object}
              workDims={SeveralSpeculative.dimensions}
              workDetails={SeveralSpeculative.details}
              workImage={SeveralSpeculative.images[0]}
            />
            <Fragments
              one
              fragment1={FRAGMENTS[27]}
            />
            <Whole
              matte
              dark
              workId={SeveralSpeculative.id}
              workTitle={SeveralSpeculative.title}
              workYear={SeveralSpeculative.year}
              workObject={SeveralSpeculative.object}
              workDims={SeveralSpeculative.dimensions}
              workDetails={SeveralSpeculative.details}
              workImage={SeveralSpeculative.images[3]}
            />
            <Fragments
              one
              fragment1={FRAGMENTS[27]}
            />
            <Whole
              matte
              dark
              workId={SeveralSpeculative.id}
              workTitle={SeveralSpeculative.title}
              workYear={SeveralSpeculative.year}
              workObject={SeveralSpeculative.object}
              workDims={SeveralSpeculative.dimensions}
              workDetails={SeveralSpeculative.details}
              workImage={SeveralSpeculative.images[2]}
            />
            <Fragments
              one
              fragment1={FRAGMENTS[27]}
            />
            <Whole
              matte
              light
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
              fragment1={FRAGMENTS[27]}
            />
            <Whole
              matte
              light
              workId={DirectionZine.id}
              workTitle={DirectionZine.title}
              workYear={DirectionZine.year}
              workObject={DirectionZine.object}
              workDims={DirectionZine.dimensions}
              workDetails={DirectionZine.details}
              workImage={DirectionZine.images[0]}
            />
            <Fragments
              one
              fragment1={FRAGMENTS[27]}
            />
            <Whole
              matte
              light
              workId={DirectionZine.id}
              workTitle={DirectionZine.title}
              workYear={DirectionZine.year}
              workObject={DirectionZine.object}
              workDims={DirectionZine.dimensions}
              workDetails={DirectionZine.details}
              workImage={DirectionZine.images[3]}
            />
          </PageContainer>
          <Menu/>
        </SiteWrapper>
      </>
    );
  }
}

export default Homepage;

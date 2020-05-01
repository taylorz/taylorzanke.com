import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import './styles/styles.scss';
import Homepage from './pages/Homepage/Homepage';
import Aboutpage from './pages/Aboutpage/Aboutpage';
import TransmissionsFrom from './pages/TransmissionsFrom/TransmissionsFrom';
import GraftedSpaces from './pages/GraftedSpaces/GraftedSpaces';
import NightDrawings from './pages/NightDrawings/NightDrawings';
import SplicedHouse from './pages/SplicedHouse/SplicedHouse';
import DirectionZine from './pages/DirectionZine/DirectionZine';
import SeveralSpeculative from './pages/SeveralSpeculative/SeveralSpeculative';
import TwoCitiesDiaryHNY from './pages/TwoCitiesDiaryHNY/TwoCitiesDiaryHNY';
import TwoCitiesDiaryMP from './pages/TwoCitiesDiaryMP/TwoCitiesDiaryMP';
import Reformulations1 from './pages/Reformulations1/Reformulations1';
import TwoVisitations from './pages/TwoVisitations/TwoVisitations';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Router>
          <Route exact path="/" component={Homepage}/>
          <Route path="/about" component={Aboutpage}/>
          <Route path="/transmissions-from-rare-space" component={TransmissionsFrom}/>
          <Route path="/grafted-spaces" component={GraftedSpaces}/>
          <Route path="/night-drawings" component={NightDrawings}/>
          <Route path="/spliced-house" component={SplicedHouse}/>
          <Route path="/direction-zine" component={DirectionZine}/>
          <Route path="/several-speculative-improvements" component={SeveralSpeculative}/>
          <Route path="/two-cities-diary" component={TwoCitiesDiaryHNY}/>
          <Route path="/two-cities-diary-mumbai-paris" component={TwoCitiesDiaryMP}/>
          <Route path="/reformulatons-1" component={Reformulations1}/>
          <Route path="/two-visitations" component={TwoVisitations}/>
        </Router>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import './styles/styles.scss';
import Homepage from './pages/Homepage/Homepage';
import TransmissionsFrom from './pages/TransmissionsFrom/TransmissionsFrom';
import GraftedSpaces from './pages/GraftedSpaces/GraftedSpaces';
import NightDrawings from './pages/NightDrawings/NightDrawings';
import SplicedHouse from './pages/SplicedHouse/SplicedHouse';
import DirectionZine from './pages/DirectionZine/DirectionZine';
import SeveralSpeculative from './pages/SeveralSpeculative/SeveralSpeculative';
import TwoCitiesDiary from './pages/TwoCitiesDiary/TwoCitiesDiary';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Router>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/transmissions-from-rare-space" component={TransmissionsFrom}/>
          <Route exact path="/grafted-spaces" component={GraftedSpaces}/>
          <Route exact path="/night-drawings" component={NightDrawings}/>
          <Route exact path="/spliced-house" component={SplicedHouse}/>
          <Route exact path="/direction-zine" component={DirectionZine}/>
          <Route exact path="/several-speculative-improvements" component={SeveralSpeculative}/>
          <Route exact path="/two-cities-diary" component={TwoCitiesDiary}/>
        </Router>
      </div>
    );
  }
}

export default App;

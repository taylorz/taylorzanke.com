import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import './styles/styles.scss';
import Homepage from './pages/Homepage/Homepage';
import GraftedSpaces from './pages/GraftedSpaces/GraftedSpaces';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Router>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/grafted-spaces" component={GraftedSpaces}/>
        </Router>
      </div>
    );
  }
}

export default App;

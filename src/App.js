import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import './styles/styles.scss';
import Homepage from './pages/Homepage/Homepage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Router>
          <Route exact path="/" component={Homepage}/>
        </Router>
      </div>
    );
  }
}

export default App;

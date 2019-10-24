import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import './styles/styles.scss';
import Homepage from './pages/Homepage/Homepage';
import About from './pages/About/About';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Router>
          <Route exact path="/" component={Homepage}/>
          <Route path="/about" component={About}/>
        </Router>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import { CSSTransition, TransitionGroup, Transition } from 'react-transition-group';
import './styles/styles.scss';
import Home from './pages/Homepage/Homepage';
// import About from './pages/Aboutpage/Aboutpage';
// import TransmissionsFrom from './pages/TransmissionsFrom/TransmissionsFrom';
// import DirectionZine from './pages/DirectionZine/DirectionZine';
// import SeveralSpeculative from './pages/SeveralSpeculative/SeveralSpeculative';
// import TwoCitiesDiaryHNY from './pages/TwoCitiesDiaryHNY/TwoCitiesDiaryHNY';
// import TwoCitiesDiaryMP from './pages/TwoCitiesDiaryMP/TwoCitiesDiaryMP';
// import Reformulations1 from './pages/Reformulations1/Reformulations1';
// import TwoVisitations from './pages/TwoVisitations/TwoVisitations';
import './App.css';

const routes = [
  { path: '/', name: 'Home', Component: Home },
  // { path: '/about', name: 'About', Component: About },
  // { path: '/transmissions-from-rare-space', name: 'Transmissions From Rare Space', Component: TransmissionsFrom },
  // { path: '/direction-zine', name: 'Direction Zine', Component: DirectionZine },
  // { path: '/several-speculative-improvements', name: 'Several Speculative Improvements to my Family Home', Component: SeveralSpeculative },
  // { path: '/two-cities-diary-honolulu-newyork', name: 'Two Cities Diary Honolulu New York', Component: TwoCitiesDiaryHNY },
  // { path: '/two-cities-diary-mumbai-paris', name: 'Two Cities Diary Mumbai Paris', Component: TwoCitiesDiaryMP },
  // { path: '/reformulations-1', name: 'Reformulations 1', Component: Reformulations1 },
  // { path: '/two-visitations', name: 'Two Visitations', Component: TwoVisitations },
]

class App extends Component {
  render() {
    return (
      <div className="App" >

      <Router>
          <ScrollToTop/>
          <Route render={({location}) => {
            const { key } = location
            return (
              <>
              <TransitionGroup component={null}>
              <CSSTransition
                key={key}
                appear={true}
                classNames="my-node"
                timeout={{enter: 250, exit: 250}}
              >
              <Switch location={location}>
                {routes.map(({ path, Component }) => (
                  <Route key={path} exact path={path}>
                    {({ match }) => (
                        <div className="my-node">
                          <Component />
                        </div>
                    )}
                  </Route>
                ))}
              </Switch>
              </CSSTransition>
              </TransitionGroup>
              </>
            )
          }}/>
        </Router>
      </div>
    );
  }
}

export default App;

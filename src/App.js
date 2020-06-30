import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import { CSSTransition, TransitionGroup, Transition } from 'react-transition-group'
import './styles/styles.scss'
import Homepage from './pages/Homepage/Homepage'
import ProjectPage from './components/ProjectPage/ProjectPage'
import './App.css'

import WORKS from './constants/works/works'

// const routes = [
//   { path: '/', name: 'Home', Component: Home },
  // { path: '/about', name: 'About', Component: About },
  // { path: '/transmissions-from-rare-space', name: 'Transmissions From Rare Space', Component: TransmissionsFrom },
  // { path: '/direction-zine', name: 'Direction Zine', Component: DirectionZine },
  // { path: '/several-speculative-improvements', name: 'Several Speculative Improvements to my Family Home', Component: SeveralSpeculative },
  // { path: '/two-cities-diary-honolulu-newyork', name: 'Two Cities Diary Honolulu New York', Component: TwoCitiesDiaryHNY },
  // { path: '/two-cities-diary-mumbai-paris', name: 'Two Cities Diary Mumbai Paris', Component: TwoCitiesDiaryMP },
  // { path: '/reformulations-1', name: 'Reformulations 1', Component: Reformulations1 },
  // { path: '/two-visitations', name: 'Two Visitations', Component: TwoVisitations },
// ]

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
                <Route key={"/"} exact path={"/"}>
                <div className="my-node">
                  <Homepage/>
                  </div>
                </Route>
                {WORKS.map(( work, index ) => (
                  <Route key={index} exact path={work.route}>
                    {({ match }) => (
                        <div className="my-node">
                          <ProjectPage />
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
    )
  }
}

export default App

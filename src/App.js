import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import { CSSTransition, TransitionGroup, Transition } from 'react-transition-group'
import './styles/styles.scss'
import Homepage from './pages/Homepage/Homepage'
import ProjectPage from './components/ProjectPage/ProjectPage'
import './App.css'

import WORKS from './constants/works/works'

class App extends Component {
  render() {
    return (
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
                timeout={{enter: 1000, exit: 500}}
              >
                <Switch location={location}>
                  <Route key={"/"} exact path={"/"}>
                    <div className="my-node">
                      <Homepage/>
                    </div>
                  </Route>
                  {WORKS.map(( work ) => (
                    <Route key={work.route} exact path={work.route}>
                      {({ match }) => (
                          <div className="my-node">
                            <ProjectPage work={work}/>
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
    )
  }
}

export default App

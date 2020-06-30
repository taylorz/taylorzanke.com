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
                timeout={{enter: 0, exit: 0}}
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
                            <ProjectPage 
                              work={work}
                            />
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

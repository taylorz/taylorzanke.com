import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
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
                      <Homepage />
                    </div>
                  </Route>
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

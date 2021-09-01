import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import { GlobalStyle, theme } from './styles/theme'
import createHistory from 'history/createBrowserHistory'

import './App.css'
import Homepage from './pages'
import Books from './pages/Books'
import Contact from './pages/Contact'
import Profile from './pages/Profile'
import Recordings from './pages/Recordings'
import Statements from './pages/Statements'

import {
  Grid
} from './components/ui'
import AppWrapper from './components/AppWrapper'
import Nav from './components/Nav'
import BookPage from './components/BookPage'
import RecordingPage from './components/RecordingPage'

import BOOKS from './constants/books'
import RECORDINGS from './constants/recordings'

const routes = [
  { route: '/', name: 'Homepage', Component: Homepage },
  { route: '/books', name: 'Books', Component: Books },
  { route: '/contact', name: 'Contact', Component: Contact },
  { route: '/profile', name: 'Profile', Component: Profile },
  { route: '/recordings', name: 'Recordings', Component: Recordings },
  { route: '/statements', name: 'Statements', Component: Statements },
]

const history = createHistory()

const App = ({}) => {

  return (
    <ThemeProvider theme={theme}>

      <GlobalStyle />

      <Router history={history}>

        <AppWrapper>

          <Grid container spacingX={4}>

            <Grid item xs={12} sm={3} md={2} lg={1.5} style={{flex: '1'}}>
              <Nav />
            </Grid>

            <Grid item xs={12} sm={9} md={10} lg={10.5}>
              <Route
                render={({location}) => {
                const { key } = location

                return (
                  <Switch location={location} key={key}>

                    {routes.map(({ route, Component }) => (
                      <Route key={route} exact path={route}>
                        <Component />
                      </Route>
                    ))}

                    {BOOKS.map(( book, index ) => (
                      <Route key={index} exact path={`/books${book.route}`}>
                        <BookPage
                          book={book}
                        />
                      </Route>
                    ))}

                    {RECORDINGS.map(( recording, index ) => (
                      <Route key={index} exact path={`/recordings${recording.route}`}>
                        <RecordingPage
                          recording={recording}
                        />
                      </Route>
                    ))}

                </Switch>
                )

              }}/>
            </Grid>

          </Grid>


        </AppWrapper>


      </Router>

    </ThemeProvider>
  )
}

export default App

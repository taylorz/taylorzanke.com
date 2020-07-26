import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { NavLink } from "react-router-dom"
import './PageContainer.scss';
import WorkList from '../WorkList/WorkList'
import Footer from '../Footer/Footer'


const PageContainer = ({ className, children, center }) => {
  useEffect(() => {
    setTimeout(() => window.scrollTo(0, 0), 500)
  }, [])
  return (
    <Grid container className={`page-container ${className}`} justify={`${center ? "center" : "flex-start"}`}>
      <Grid item xs={12} className="header">
        <div className="home"><NavLink exact to="/">Taylor Zanke</NavLink></div>
      </Grid>
      <Grid item xs={12}>{children}</Grid>
      <Grid item xs={12} className="list">
        <div className="home"><NavLink exact to="/">Index</NavLink></div>
        <WorkList/>
      </Grid>
      <Footer/>
    </Grid>
  )
}

export default PageContainer
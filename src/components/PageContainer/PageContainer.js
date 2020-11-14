import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { NavLink } from "react-router-dom"
import './PageContainer.scss';
import Footer from '../Footer/Footer'


const PageContainer = ({ className, children, center }) => {
  useEffect(() => {
    setTimeout(() => window.scrollTo(0, 0), 500)
  }, [])
  return (
    <Grid container className={`page-container ${className}`} justify={`${center ? "center" : "flex-start"}`}>
      <Grid item xs={12} sm={3} className="header">
        <div className="home"><NavLink exact to="/">Taylor Zanke</NavLink></div>
      </Grid>
    </Grid>
  )
}

export default PageContainer
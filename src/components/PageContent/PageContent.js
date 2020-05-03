import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import './PageContent.scss'

class PageContent extends Component {
  render() {
    const { children, className, onClick } = this.props
    return (
      <Grid container className={`page-content-wrapper ${className}`}>
        {children}
      </Grid>
    );
  }
}

export default PageContent;

import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import './PageContent.scss'

class PageContent extends Component {
  render() {
    const { children, className, onClick } = this.props
    return (
      <div className={`page-content-wrapper ${className}`}>
        {children}
        <div className="page-content-end-link">
          <Link to="/">Back to Home</Link>
        </div>
      </div>
    );
  }
}

export default PageContent;

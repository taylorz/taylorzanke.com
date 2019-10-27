import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Caption.scss'

class Caption extends Component {
  render() {
    const { className, title, year, object, dimension, details, light, dark } = this.props
    return (
      <div className={`caption ${className} ${light && "light"} ${dark && "dark"}`}>
        {title}
      </div>
    );
  }
}

export default Caption;

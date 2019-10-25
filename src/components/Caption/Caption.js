import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Caption.scss'

class Caption extends Component {
  render() {
    const { className, title, year, object, dimension, light, dark } = this.props
    return (
      <ul className={`caption ${className} ${light && "light"} ${dark && "dark"}`}>
        <li className="caption-item">{title}</li>
        <li className="caption-item">{year}</li>
        <li className="caption-item">{object}</li>
        <li className="caption-item">{dimension}</li>
      </ul>
    );
  }
}

export default Caption;

import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Caption.scss'

class Caption extends Component {
  render() {
    const { className, title, year, object, dimension, details, light, dark } = this.props
    return (
      <ul className={`caption ${className} ${light && "light"} ${dark && "dark"}`}>
        <li className="title">{title}</li>
        <li className="year">{year}</li>
        <li className="object">{object}</li>
        <li className="dimension">{dimension}</li>
        <li className="details">{details}</li>
      </ul>
    );
  }
}

export default Caption;

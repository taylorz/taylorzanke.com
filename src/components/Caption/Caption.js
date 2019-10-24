import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Caption.scss'

class Caption extends Component {
  render() {
    const { className, title, year, object, dimension } = this.props
    return (
      <ul className={`caption ${className}`}>
        <li className="caption-item">{title}</li>
        <li className="caption-item">{year}</li>
        <li className="caption-item">{object}</li>
        <li className="caption-item">{dimension}</li>
      </ul>
    );
  }
}

export default Caption;

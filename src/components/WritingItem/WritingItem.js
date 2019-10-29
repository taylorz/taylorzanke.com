import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './WritingItem.scss'

class WritingItem extends Component {
  render() {
    const { className, title, year, type } = this.props
    return (
      <div className={`writing-container ${className}`}>
        <Grid item xs={2} className="writing-item writing-type">{type}</Grid>
        <Grid item xs={9} className="writing-item writing-title">{title}</Grid>
        <Grid item xs={1} className="writing-item writing-wordCount">{year}</Grid>
      </div>
    );
  }
}

export default WritingItem;

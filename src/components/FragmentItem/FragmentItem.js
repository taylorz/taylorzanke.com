import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './FragmentItem.scss'

class FragmentItem extends Component {
  render() {
    const { className, description, id } = this.props
    return (
      <div className={`fragments-wrapper ${className}`}>
        <Grid item xs={2} className="fragment-item fragment-id">{id}</Grid>
        <Grid item xs={9} className="fragment-item fragment-description">{description}</Grid>
      </div>
    );
  }
}

export default FragmentItem;

import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './TextBlock.scss';

class TextBlock extends Component {
  render() {
    const { textContent, textLabel } = this.props
    return (
      <Grid container className="text-block">
        <Grid item className="block-label" xs={12} md={6}>{textLabel}</Grid>
        <Grid item className="block-content" xs={12} md={6}>{textContent}</Grid>
      </Grid>
    );
  }
}

export default TextBlock;

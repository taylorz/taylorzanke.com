import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './TextBlock.scss';

class TextBlock extends Component {
  render() {
    const { blockOne, blockTwo, blockThree, blockFour, blockFive, blockSix } = this.props
    return (
      <Grid container className="text-block">
        <Grid item className="block one" xs={12} md={6}>
        {blockOne}
        </Grid>
        <Grid item className="block two" xs={12} md={6}>
          {blockTwo}
        </Grid>
        <Grid item className="block three" xs={12} md={6}>
          {blockThree}
        </Grid>
        <Grid item className="block four" xs={12} md={6}>
          {blockFour}
        </Grid>
        <Grid item className="block five" xs={12} md={6}>
          {blockFive}
        </Grid>
        <Grid item className="block six" xs={12} md={6}>
          {blockSix}
        </Grid>
      </Grid>
    );
  }
}

export default TextBlock;

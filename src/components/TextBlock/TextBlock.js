import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './TextBlock.scss';

class TextBlock extends Component {
  render() {
    const { blockOne, blockTwo, blockThree, blockFour, blockFive, blockSix } = this.props
    return (
      <Grid container className="text-block">
        {blockOne &&
          <Grid item className="block one" xs={12} md={6}>
            {blockOne}
          </Grid>
        }
        {blockTwo &&
          <Grid item className="block two" xs={12} md={6}>
            {blockTwo}
          </Grid>
        }
        {blockThree &&
          <Grid item className="block three" xs={12} md={6}>
            {blockThree}
          </Grid>
        }
        {blockFour &&
          <Grid item className="block four" xs={12} md={6}>
            {blockFour}
          </Grid>
        }
        {blockFive &&
          <Grid item className="block five" xs={12} md={6}>
            {blockFive}
          </Grid>
        }
        {blockSix &&
          <Grid item className="block six" xs={12} md={6}>
            {blockSix}
          </Grid>
        }
      </Grid>
    );
  }
}

export default TextBlock;

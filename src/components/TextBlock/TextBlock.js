import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './TextBlock.scss';

class TextBlock extends Component {
  render() {
    const { blockOne, blockTwo, blockThree, blockFour } = this.props
    return (
      <Grid container className="text-block">
        {blockOne &&
          <Grid item className="block one" xs={12} md={8}>
            {blockOne}
          </Grid>
        }
        {blockTwo &&
          <Grid item className="block two" xs={12} md={8}>
            {blockTwo}
          </Grid>
        }
        {blockThree &&
          <Grid item className="block three" xs={12} md={8}>
            {blockThree}
          </Grid>
        }
        {blockFour &&
          <Grid item className="block four" xs={12} md={8}>
            {blockFour}
          </Grid>
        }
      </Grid>
    );
  }
}

export default TextBlock;

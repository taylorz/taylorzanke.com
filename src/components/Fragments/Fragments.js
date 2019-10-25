import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Fragments.scss';

import WorkId from '../WorkId/WorkId';

class Fragments extends Component {
  render() {
    const { className, fragment1, fragment2, fragment3, fragment4 } = this.props
    return (
      <>
        <Grid container className="fragments-container">
          <Grid item md={4} className="fragment">
            <img src={fragment1.image}/>
          </Grid>
          <Grid item md={7} className="fragment">
            <img src={fragment2.image}/>
          </Grid>
          <WorkId workId={[fragment1.id, fragment2.id]}/>
        </Grid>
      </>
    );
  }
}

export default Fragments;


// { fragments.map((fragment) =>
//   <Grid item md={3} className="fragment">
//     <img src={fragment.image}/>
//   </Grid>
//   )
// }

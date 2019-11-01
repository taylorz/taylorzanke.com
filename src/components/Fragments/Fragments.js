import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Fragments.scss';

import WorkId from '../WorkId/WorkId';
import Caption from '../Caption/Caption';

class Fragments extends Component {
  render() {
    const { className, onClick, fragment1, fragment2, fragment3, one, two, three} = this.props
    return (
      <>
        <Grid container className="fragments-container">
        {one &&
          <>
            <Grid item md={4} className="fragment">
              <div className="fragments-wrapper">
                <img src={fragment1.image}/>
                {/*<Caption title={fragment1.description}/>*/}
              </div>
            </Grid>
            <WorkId workId={[fragment1.id]} onClick={onClick}/>
          </>
        }
        {two &&
          <>
            <Grid item md={4} className="fragment">
              <div className="fragments-wrapper">
                <img src={fragment1.image}/>
                {/*<Caption title={fragment1.description}/>*/}
              </div>
            </Grid>
            <Grid item md={6} className="fragment">
              <div className="fragments-wrapper">
                <img src={fragment2.image}/>
                {/*<Caption title={fragment2.description}/>*/}
              </div>
            </Grid>
            <WorkId workId={[fragment1.id, fragment2.id]} onClick={onClick}/>
          </>
        }
        {three &&
          <>
            <Grid item md={3} className="fragment">
              <div className="fragments-wrapper">
                <img src={fragment1.image}/>
                {/*<Caption title={fragment1.description}/>*/}
              </div>
            </Grid>
            <Grid item md={5} className="fragment">
              <div className="fragments-wrapper">
                <img src={fragment2.image}/>
                {/*<Caption title={fragment2.description}/>*/}
              </div>
            </Grid>
            <Grid item md={4} className="fragment">
              <div className="fragments-wrapper">
                <img src={fragment3.image}/>
                {/*<Caption title={fragment3.description}/>*/}
              </div>
            </Grid>
            <WorkId workId={[fragment1.id, fragment2.id, fragment3.id]} onClick={onClick}/>
          </>
        }
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

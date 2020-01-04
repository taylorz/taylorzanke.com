import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './WorkDetail.scss';

class WorkDetail extends Component {
  render() {
    const { detail } = this.props
    return (
      <Grid item xs={12} md={6} lg={4} className="work-detail">
        <img className="detail-image" src={detail}/>
      </Grid>
    );
  }
}

export default WorkDetail;

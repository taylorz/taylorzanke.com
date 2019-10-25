import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './WorkId.scss'

class WorkId extends Component {
  render() {
    const { className, workId } = this.props
    return (
      <div className="work-id">
        {workId}
      </div>
    );
  }
}

export default WorkId;

// {workId.map((id) =>
//   <div>his</div>
// )}

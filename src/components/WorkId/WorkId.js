import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './WorkId.scss'

class WorkId extends Component {
  render() {
    const { className, workId, onClick} = this.props
    return (
      <div className="work-id" onClick={onClick}>
        <ul className="id-list">
          {workId.reverse().map((id) =>
            <li className="id-list-item">{id}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default WorkId;

// {workId.map((id) =>
//   <div>his</div>
// )}

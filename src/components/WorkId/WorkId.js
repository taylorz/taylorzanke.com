import React, { Component } from 'react';
import './WorkId.scss'

class WorkId extends Component {
  render() {
    const { workId, onClick} = this.props
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

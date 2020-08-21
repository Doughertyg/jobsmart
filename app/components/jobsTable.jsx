import React from 'react';
import Table from './table.jsx';

const JobsTable = (props) => {
  const columns = {
    'company': 'Company',
    'position': 'Position'
  }

  return (
    <Table cols={columns} data={props.data} class="--jobs" />
  )
}

export default JobsTable;

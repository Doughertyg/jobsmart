import React from 'react';

const Table = (props) => {
  // TODO: build table from cols and data props

  return (
    <table className={`app__table ${props.class? props.class : ''}`}>
      <tbody className="table__body">
        <tr>
          <td>Placeholder</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Table;

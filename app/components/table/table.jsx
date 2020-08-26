import React from 'react';

import './table.scss';

/**
 * Universal table component that creates a table
 * @param {Object} props object of passed in props 
 * Props:
 *   cols [
 *     key
 *     title    
 *   ]
 *   data [
 *     key: val
 *     onclick
 *   ]
 */
class Table extends React.Component {
  buildTable = () => {
    const { cols, data, noData } = this.props;

    const table = [];
    const len = cols.length;

    const empty = (
      <tr className="--nodata" key={0}>
        <td colSpan={len}>
          {noData || "No Data"}
        </td>
      </tr>
    )

    if (data.length === 0) {
      return [empty];
    }

    for (let i = 0; i < data.length; i++) {
      const row = data[i];

      table.push(
        <tr className={`table__row ${row.class}`} key={`row--${i}`}>
          {
            cols.map(col => {
              return row[col.key] !== undefined ?
                <td className={`cell cell--${col.key}`} style={{width: `calc(100% / ${len})`}} key={`key--${col.key}`}>
                  {row[col.key]}
                </td> :
                <td className={`cell cell--${col.key}`} style={{width: `calc(100% / ${len})`}} key={`key--${col.key}`}></td>
            })
          }
        </tr>
      )
    }

    return body;
  }

  render () {
    return (
      <div className="table__wrapper">
        <table className="app__table">
          <thead>
            <tr>
              {colGroups.map((group, index) => {
                
                return (
                  <th
                    className={...group.classes}
                    colSpan={group.colSpan}
                    key={index}
                  >{group.title}</th>
                )
              })}
            </tr>
            <tr>
              {cols.map(col => {
                let classes = `table__col col-${col.key}`;
  
                return (
                <th
                  className={classes}
                  id={col.key}
                  style={{width: `calc(100% / ${cols.length})`}}
                  key={`key-${col.key}`}
                >{col.title}</th>
                )
              })}
            </tr>
          </thead>
          <tbody className="table__body">
            {this.buildTable()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Table;

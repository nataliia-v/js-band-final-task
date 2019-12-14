import React from 'react';
import classNames from 'classnames';

import styles from './Table.module.scss';

function Table({ columns, data, classes = {} }) {
  const tableClass = classNames(
    styles.table,
    classes.table,
    'table table-hover'
  );

  return (
    <table className={tableClass}>
      <thead className="thead-light">
        <tr>
          {columns.map(column => (
            <th key={column.fieldName} scope="col">
              {column.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            {columns.map(column => (
              <td key={column.fieldName}>{item[column.fieldName]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;

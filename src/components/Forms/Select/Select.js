import React from 'react';
import classNames from 'classnames';

function Select({ name, value, onChange, options, classes = {} }) {
  const wrapperClass = classNames(classes.root, 'form-control');

  return (
    <select
      className={wrapperClass}
      name={name}
      value={value}
      onChange={onChange}
    >
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;

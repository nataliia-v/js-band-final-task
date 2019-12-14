import React from 'react';
import classNames from 'classnames';

function Input({
  type = 'text',
  name,
  value,
  placeholder,
  onChange,
  required = false,
  minLength = 0,
  maxLength,
  min,
  max,
  classes = {}
}) {
  const inputClass = classNames(classes.input, 'form-control');

  return (
    <input
      className={inputClass}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      required={required}
      minLength={minLength}
      maxLength={maxLength}
      min={min}
      max={max}
    />
  );
}

export default Input;

import React from 'react';

function Input({
  type = 'text',
  name,
  value,
  placeholder,
  onChange,
  required = false,
  minLength = 0,
  maxLength
}) {
  return (
    <input
      className="form-control"
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      required={required}
      minLength={minLength}
      maxLength={maxLength}
    />
  );
}

export default Input;

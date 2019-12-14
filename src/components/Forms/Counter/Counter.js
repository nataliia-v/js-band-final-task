import React from 'react';
import Input from 'components/Forms/Input/Input';

import styles from './Counter.module.scss';

function Counter({
  name,
  value,
  onChange,
  required,
  minLength,
  maxLength,
  min,
  max
}) {
  return (
    <Input
      type="number"
      name={name}
      classes={{ input: styles.input }}
      value={value}
      onChange={onChange}
      required={required}
      minLength={minLength}
      maxLength={maxLength}
      min={min}
      max={max}
    />
  );
}

export default Counter;

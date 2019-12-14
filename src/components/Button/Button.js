import React from 'react';
import classNames from 'classnames';

function Button({
  type = 'button',
  classes = {},
  disabled,
  onClick,
  children
}) {
  const buttonClass = classNames('btn btn-primary', classes.root);

  return (
    <button
      type={type}
      className={buttonClass}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;

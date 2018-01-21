import React from 'react';
import PropTypes from 'prop-types';


const Input = ( { type='text', value, placeholder, label, onChange } ) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        id={label}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Input;

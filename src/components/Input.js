import React from 'react';

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

export default Input;

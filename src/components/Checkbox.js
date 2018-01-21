import React from 'react';

const Checkbox = ( { checked, value, label, onChange } ) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input
        type='checkbox'
        checked={checked}
        name={label}
        id={label}
        value={label}
        onChange={onChange}
      />
    </div>
  )
}

export default Checkbox;

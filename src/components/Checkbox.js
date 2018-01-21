import React from 'react';
import PropTypes from 'prop-types';


const Checkbox = ( { checked, label, onChange } ) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input
        type='checkbox'
        checked={checked || false}
        name={label}
        id={label}
        value={label}
        onChange={onChange}
      />
    </div>
  )
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
}

export default Checkbox;

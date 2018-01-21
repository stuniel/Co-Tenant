import React from 'react';
import PropTypes from 'prop-types';


const Flat = ({ flat }) => {
  console.log(flat)
  return (
  <div>
    <h1>{flat.title}</h1>
    <span>{flat.location}</span><br/>
    <span>{`$${flat.price}`}</span><br/>
    {flat.amenities.map((amenity) => (
      <h3 key={amenity}>{amenity}</h3>
    ))}
  </div>
)}

Flat.propTypes = {
  flat: PropTypes.object.isRequired,
}

export default Flat;

import React from 'react';

const Flat = ({ flat }) => {
  console.log(flat)
  return (
  <div>
    <h1>{flat.title}</h1>
    <span>{flat.location}</span><br/>
  <span>{`$${flat.price}`}</span><br/>
    {flat.amenities.map((amenity) => (
      <h3>{amenity}</h3>
    ))}
  </div>
)}



export default Flat;

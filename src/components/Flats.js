import React from 'react';
import Flat from './Flat';

const Flats = ({data}) => {
  console.log(data)
  if(!data && data.length === 0) return null
  else {return data.map(flat => (
    <Flat
      key={flat['_id']}
      flat={flat}
    />
  ))}
}

export default Flats;

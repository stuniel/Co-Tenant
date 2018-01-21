import React from 'react';
import PropTypes from 'prop-types';

import Flat from './Flat';


const Flats = ({data}) => {
  if(!data && data.length === 0) return null
  else {return data.map(flat => (
    <Flat
      key={flat['_id']}
      flat={flat}
    />
  ))}
}

Flats.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Flats;

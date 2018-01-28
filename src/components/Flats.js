import React from 'react';
import PropTypes from 'prop-types';

import Flat from './Flat';


const Flats = ({data}) => {
  const flats = data.map(flat => (
    <Flat
      key={flat['_id']}
      flat={flat}
    />
  ))
  return (
    <div className="col s12 m6 l6">
      <div className="row">
        {flats}
      </div>
    </div>
  )
}

Flats.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Flats;

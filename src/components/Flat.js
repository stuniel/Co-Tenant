import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import slugs from 'slugs';


const Flat = ({ flat }) => {
  return (
    <Link to={`/flats/${slugs(flat['_id'])}`}>
      <div className='col s12 m4 l6'>
        <div className='card-medium'>
          <div style={{backgroundImage: `url(${flat.image})`}} class='card-image-medium'/>
          <div className='card-content-medium'>
            <div className='card-header'>{flat.title}</div>
            <span>{flat.location}</span><br/>
            <span>{`$${flat.price}`}</span><br/>
          </div>
        </div>
      </div>
    </Link>
  )
}

Flat.propTypes = {
  flat: PropTypes.object.isRequired,
}

export default Flat;

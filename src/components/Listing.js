import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import slugs from 'slugs';


class Listing extends React.Component {

  findFlat = (id) => {
    const flats = this.props.data;
    return flats.find(flat => {
      return flat['_id'] === id
    });
  }

  render() {
    const { flatId } = this.props.computedMatch.params;
    const flat = this.findFlat(flatId);
    if(!flat) return null
    return (
      <div className='col s12 m6'>
        <div className='card-large'>
          <div style={{backgroundImage: `url(${flat.image})`}} class='card-image-medium'/>
            <div className='card-content-medium'>
            <div className='card-header'>{flat.title}</div>
            <span>{flat.location}</span><br/>
            <span>{`$${flat.price}`}</span><br/>
          </div>
        </div>
      </div>
    )
  }
}

Listing.propTypes = {
}

export default Listing;

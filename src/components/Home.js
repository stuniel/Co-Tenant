import React from 'react';
import PropTypes from 'prop-types';

import Flats from './Flats';
import Map from './Map';


const Home = ({ data }) => {
  return (
    <div className="row">
      <Flats data={data}/>
      <Map />
    </div>
  )
}

Home.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Home;

import React from 'react';
import PropTypes from 'prop-types';

import Flats from './Flats';


const Home = ({ data }) => {
  return (
    <div>
      <Flats data={data}/>
    </div>
  )
}

Home.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Home;

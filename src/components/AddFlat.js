import React from 'react';
import PropTypes from 'prop-types';

import CreateFlat from './CreateFlat';


const AddFlat = ({ handleCommentSubmit }) => {
  return (
    <div>
      <CreateFlat onCommentSubmit={handleCommentSubmit}/>
    </div>
  )
}

AddFlat.propTypes = {
  handleCommentSubmit: PropTypes.func.isRequired,
}

export default AddFlat;

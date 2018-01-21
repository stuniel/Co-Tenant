import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';


const NavbarItem = ({ item }) => {
  const { label, to } = item;

  return (
    <Link to={to}>
      <li>
        {label}
      </li>
    </Link>
  )
}

NavbarItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default NavbarItem;

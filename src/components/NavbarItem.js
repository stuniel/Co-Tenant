import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';


const NavbarItem = ({ item, float }) => {
  const { label, to } = item;

  return (
    <li className={`NavbarItem ${float}`}>
      <Link to={to}>
          {label}
      </Link>
    </li>
  )
}

NavbarItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default NavbarItem;

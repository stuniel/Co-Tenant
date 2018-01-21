import React from 'react';


class Navbar extends React.Component {
  render() {
    const children = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {})
    })
    return (
      <ul>
        {children}
      </ul>
    )
  }
}

export default Navbar;

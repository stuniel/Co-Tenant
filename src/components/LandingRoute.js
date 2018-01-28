import React from 'react';
import { Route } from 'react-router';


const LandingRoute = ({ ...props }) => (
  <Route path={props.path}>
    {React.cloneElement(props.children, props)}
  </Route>
)

export default LandingRoute;

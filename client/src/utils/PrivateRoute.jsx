import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRouteComponent = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (localStorage.getItem("token")) {
        return <Component {...props} />;
      } else {
        return <Redirect to="/" />;
      }
    }}
  />
);

export default PrivateRouteComponent;

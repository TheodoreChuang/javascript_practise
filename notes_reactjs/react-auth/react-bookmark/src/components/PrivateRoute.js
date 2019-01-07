import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = props => {
  const { component: Component, token, ...rest } = props;

  return (
    <Route
      {...rest}
      render={props => {
        // TODO: implement more secure token check
        if (token) {
          return <Component {...props} />;
        }

        return <Redirect to="/login" />;
      }}
    />
  );
};

export default PrivateRoute;

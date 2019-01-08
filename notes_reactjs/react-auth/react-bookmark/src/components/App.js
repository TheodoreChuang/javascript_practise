import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./../styles/App.css";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import BookmarksPage from "./pages/BookmarksPage";
import NotFoundPage from "./pages/NotFoundPage";
import PrivateRoute from "./PrivateRoute";

import { connect } from "react-redux";
import { setAuthToken } from "./../actions";

class App extends Component {
  logout = () => {
    this.props.setAuthToken(null);
    sessionStorage.clear();
  };

  render() {
    const { token } = this.props;

    return (
      <BrowserRouter>
        <div>
          {token !== null && <h4>User is logged in!</h4>}
          <Switch>
            <Route
              exact
              path="/"
              render={props => {
                return (
                  <HomePage {...props} logout={this.logout} token={token} />
                );
              }}
            />

            <Route
              exact
              path="/register"
              render={props => {
                return <RegisterPage {...props} />;
              }}
            />

            <Route
              exact
              path="/login"
              render={props => {
                return <LoginPage {...props} />;
              }}
            />

            <PrivateRoute
              exact
              path="/bookmarks"
              // token={token}
              component={BookmarksPage}
            />

            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token
  };
};

export default connect(
  mapStateToProps,
  { setAuthToken }
)(App);

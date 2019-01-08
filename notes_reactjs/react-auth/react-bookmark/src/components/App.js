import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./../styles/App.css";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import BookmarksPage from "./pages/BookmarksPage";
import NotFoundPage from "./pages/NotFoundPage";
// import LocalApi from "./../apis/local";
import PrivateRoute from "./PrivateRoute";
import { connect } from "react-redux";
import { setAuthToken } from "./../actions";

class App extends Component {
  // //   state = { token: sessionStorage.getItem("token") };
  // constructor(props) {
  //   super(props);
  //   const token = sessionStorage.getItem("token");
  //   this.state = { token };

  //   if (token) {
  //     LocalApi.setAuthHeader(token);
  //   }

  //   // Callback so axios interceptor has reference to specific App instance
  //   LocalApi.handleTokenError(() => {
  //     this.logout();
  //   });
  // }

  logout = () => {
    // this.setState({ token: null });
    this.props.setAuthToken(null);
    sessionStorage.clear();
  };

  // onRegisterFormSubmit = (token, cb) => {
  //   // sessionStorage.setItem("token", token);  moved to redux Action Creator
  //   LocalApi.setAuthHeader(token);
  //   this.setState({ token }, cb);
  // };

  // onLoginFormSubmit = (token, cb) => {
  //   sessionStorage.setItem("token", token);
  //   LocalApi.setAuthHeader(token);
  //   this.setState({ token }, cb);
  // };

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
                return (
                  <RegisterPage
                    {...props}
                    // onRegisterFormSubmit={this.onRegisterFormSubmit}
                  />
                );
              }}
            />

            <Route
              exact
              path="/login"
              render={props => {
                return (
                  <LoginPage
                    {...props}
                    // onLoginFormSubmit={this.onLoginFormSubmit}
                  />
                );
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

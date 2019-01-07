import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
  render() {
    const { token } = this.props;

    return (
      <div>
        <h1>Welcome To Bookmarker!</h1>

        {token ? (
          <div>
            <button onClick={this.props.logout}>Logout</button>
          </div>
        ) : (
          <div>
            <Link to="/login">
              <button>Login</button>
            </Link>
            <Link to="/register">
              <button>Register</button>
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default HomePage;

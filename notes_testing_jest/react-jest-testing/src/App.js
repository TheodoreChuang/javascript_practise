import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = { count: 0 };

  // Do not set state directly, use callback
  onButtonClick = () => {
    this.setState(state => {
      return { count: state.count + 1 };
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div className="App">
        <h1>Current count is {count}</h1>
        <button onClick={this.onButtonClick} data-test="button">
          Increment Count
        </button>
      </div>
    );
  }
}

export default App;

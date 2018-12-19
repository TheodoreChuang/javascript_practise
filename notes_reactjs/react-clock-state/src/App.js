import React, { Component } from "react";
import Clock from "./Clock";

class App extends Component {
  // Initial State via Class Fields syntax
  state = {
    latitude: null,
    errorMessage: "",
    example: "setState merges changes not overrides object"
  };

  // Initial State via Constructor
  // constructor(props) {
  // super(props);
  //     this.state = {
  //       latitude: null,
  //       errorMessage: "",
  //       value: 1,
  //       example: "setState merges changes not overrides object"
  //     };
  // }

  componentDidMount() {
    console.log("mounted");
    // web api
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ latitude: position.coords.latitude });
      },
      error => {
        console.log(error);
        this.setState({ errorMessage: error.message });
      }
    );
  }

  componentDidUpdate() {
    console.log("updated");
  }

  componentWillUnmount() {
    console.log("unmounted");
  }

  isItSummer() {
    const { latitude } = this.state;

    if (latitude) {
      const month = new Date().getMonth();

      if (
        (month >= 4 && month <= 9 && latitude > 0) ||
        ((month >= 9 || month <= 4) && latitude < 0) ||
        latitude === 0
      ) {
        console.log("It's summer");
        return true;
      }
    }
    console.log("Not summer");
    return false;
  }

  getClockIcon() {
    const { latitude } = this.state;
    if (latitude) {
      if (this.isItSummer()) {
        return "sun.svg";
      }
      return "snowflake.svg";
    }
    return null;
  }

  render() {
    const { errorMessage } = this.state;

    return (
      <div>
        {errorMessage || (
          <Clock
            icon={this.getClockIcon()}
            timezone={"Sydney/Australia"}
            date={new Date()}
          />
        )}
      </div>
    );
  }
}

export default App;

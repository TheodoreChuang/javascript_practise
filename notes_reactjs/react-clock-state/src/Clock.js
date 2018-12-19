import React, { Component } from "react";
import "./Clock.css";

class Clock extends Component {
  state = {
    // errorMessage: null,
    clockIcon: null,
    seconds: null,
    minutes: null,
    hours: null
  };

  componentDidMount() {
    console.log("Mounted: ", this.props);

    this.getClockIcon();

    setInterval(this.timer.bind(this), 1000);

    // window.navigator.geolocation.getCurrentPosition(
    //   position => {
    //     this.setState({ latitude: position.coords.latitude });
    //     this.getClockIcon();
    //   },
    //   error => {
    //     console.log(error);
    //     this.setState({ errorMessage: error.message });
    //   }
    // );
  }

  timer() {
    const dateOptions = {
      timeZone: `${this.props.timezone}`,
      hour12: false,
      hours: "numeric",
      minutes: "numeric",
      seconds: "numeric"
    };
    let time = new Date().toLocaleString("en-US", dateOptions);
    let timeUnits = time.slice(time.indexOf(" ") + 1).split(":");

    let getSeconds = timeUnits[2];
    let getMinutes = timeUnits[1];
    let getHours = timeUnits[0];

    this.setState({
      seconds: getSeconds,
      minutes: getMinutes,
      hours: getHours
    });
  }

  isItSummer() {
    const { latitude } = this.props;
    const month = new Date().getMonth();

    if (latitude) {
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
    const { latitude } = this.props;

    if (latitude) {
      if (this.isItSummer()) {
        return this.setState({ clockIcon: "sun.svg" });
      }
      return this.setState({ clockIcon: "snowflake.svg" });
    }
    return null;
  }

  // componentWillUnmount() {
  //   console.log("unmounted", this);
  //   clearInterval(this.timer);
  // }

  render() {
    const { hours, minutes, seconds, clockIcon } = this.state;

    return (
      <div className="container">
        {/* {errorMessage || ( */}
        <div className="container">
          <h3 className="label">{this.props.timezone}</h3>
          <div
            className="clock-face"
            style={{ backgroundImage: `url(/${clockIcon})` }}
          >
            <div className="clock">
              <div className="hours-container">
                <div
                  className="hours"
                  style={{
                    transform: `rotateZ(${hours * 30 + minutes / 2}deg)`
                  }}
                />
              </div>
              <div className="minutes-container">
                <div
                  className="minutes"
                  style={{ transform: `rotateZ(${minutes * 6}deg)` }}
                />
              </div>
              <div className="seconds-container">
                <div
                  className="seconds"
                  style={{ transform: `rotateZ(${seconds * 6}deg)` }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* )} */}
      </div>
    );
  }
}

export default Clock;

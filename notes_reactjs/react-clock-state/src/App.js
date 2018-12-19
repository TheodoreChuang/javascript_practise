import React, { Component } from "react";
import Clock from "./Clock";

class App extends Component {
  state = {
    locations: [
      { timezone: "America/New_York", latitude: "40.712776" },
      { timezone: "Australia/Sydney", latitude: "-33.868820" },
      { timezone: "Asia/Tokyo", latitude: "35.689487" }
    ]
  };

  render() {
    return (
      <div>
        {/* <Clock timezone={"Australia/Sydney"} latitude="-33.868820" />
        <Clock timezone={"America/New_York"} latitude="40.712776" />
        <Clock timezone={"Asia/Tokyo"} latitude="35.689487" /> */}

        {this.state.locations.map(location => (
          <Clock {...location} />
        ))}
      </div>
    );
  }
}

export default App;

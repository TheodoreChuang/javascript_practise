import React, { Component } from "react";
import Clock from "./Clock";

class App extends Component {
  render() {
    return (
      <div>
        <Clock timezone={"Australia/Sydney"} />
        <Clock timezone={"America/New_York"} />
        <Clock timezone={"Asia/Tokyo"} />
      </div>
    );
  }
}

export default App;

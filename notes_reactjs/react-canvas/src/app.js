import React, { Component } from "react";
// import ColorSelector from "./ColorSelector";
import Canvas from "./Canvas";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Let's Draw!</h1>
        {/* <ColorSelector hex="#F4424B" /> */}
        {/* <ColorSelector /> */}
        <Canvas />
      </div>
    );
  }
}

export default App;

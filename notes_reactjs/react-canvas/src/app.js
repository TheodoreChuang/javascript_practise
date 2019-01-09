import React, { Component } from "react";
import TitleInput from "./TitleInput";
import Canvas from "./Canvas";

class App extends Component {
  state = {
    title: null
  };

  onTitleInputChange = title => {
    this.setState({ title });
  };

  render() {
    return (
      <div>
        <h1>{this.state.title || "Let's Draw!"}</h1>
        <TitleInput onTitleInputChange={this.onTitleInputChange} />
        <Canvas />
      </div>
    );
  }
}

export default App;

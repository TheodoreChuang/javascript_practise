import React, { Component } from "react";

class ColorSelector extends Component {
  onInputChange = event => {
    // Parent's callback for Lifting State
    const { onColorSelectorChange } = this.props;
    onColorSelectorChange(event.target.value);
  };

  componentDidUpdate() {
    console.log("Selector updated");
  }

  render() {
    const { hex } = this.props;

    return (
      <input
        type="color"
        // defaultValue={hex} // uncontrolled element, from browser
        value={hex} // controlled element via state
        onChange={this.onInputChange}
      />
    );
  }

  // experimental syntax
  // static defaultProps = {
  //   hex: "#0000FF"
  // };
}

ColorSelector.defaultProps = {
  hex: "#0000FF"
};

export default ColorSelector;

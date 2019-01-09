import React, { Component } from "react";

class LineWidthSelector extends Component {
  onSelectChange = event => {
    const { onLineWidthChange } = this.props;
    onLineWidthChange(event.target.value);
  };

  render() {
    return (
      <select onChange={this.onSelectChange}>
        <option value="2">2</option>
        <option value="4">4</option>
        <option value="6">6</option>
        <option value="8">8</option>
        <option value="10">10</option>
      </select>
    );
  }
}

export default LineWidthSelector;

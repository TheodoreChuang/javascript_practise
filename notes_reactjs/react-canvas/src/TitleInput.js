import React, { Component } from "react";

class TitleInput extends Component {
  onInputChange = event => {
    const { onTitleInputChange } = this.props;
    onTitleInputChange(event.target.value);
  };

  render() {
    return <input type="text" onChange={this.onInputChange} />;
  }
}

export default TitleInput;

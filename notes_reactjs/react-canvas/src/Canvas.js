import React, { Component } from "react";
import ColorSelector from "./ColorSelector";

class Canvas extends Component {
  state = {
    hex: "#0000FF",
    width: 400,
    height: 400,
    coords: null
  };

  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.context = null;
  }

  // Callback for Lifting State to Parent
  onColorSelectorChange = hex => {
    this.setState({ hex });
  };

  // componentDidMount() {
  //   console.log(this.canvasRef);
  // }

  componentDidUpdate() {
    console.log("Canvas state: ", this.state);
    this.setContext();
  }

  // Creates "pencil"
  setContext() {
    this.context = this.canvasRef.current.getContext("2d");
    this.context.strokeStyle = this.state.hex;
    this.context.lineJoin = "round";
    this.context.lineWidth = 3;
  }

  onCanvasMouseDown = event => {
    const x = event.nativeEvent.offsetX;
    const y = event.nativeEvent.offsetY;
    this.setState({ coords: [x, y] });
  };

  onCanvasMouseUp = event => {
    this.setState({ coords: null });
  };

  // onCanvasMouseLeave ? to handle bug when too fast

  onCanvasMouseMove = event => {
    const x = event.nativeEvent.offsetX;
    const y = event.nativeEvent.offsetY;
    const { coords, height, width } = this.state;

    if (x > 0 && y > 0 && x < width && y < height) {
      if (coords) {
        this.context.beginPath();
        this.context.moveTo(coords[0], coords[1]);
        this.context.lineTo(x, y);
        this.context.closePath();
        this.context.stroke();
        this.setState({ coords: [x, y] });
      }
    } else {
      this.setState({ coords: null });
    }
  };

  render() {
    const { hex, width, height } = this.state;

    return (
      <div>
        <div>
          <ColorSelector
            hex={hex}
            onColorSelectorChange={this.onColorSelectorChange}
          />
        </div>
        <canvas
          ref={this.canvasRef}
          width={width}
          height={height}
          style={{ border: "3px solid black" }}
          onMouseMove={this.onCanvasMouseMove}
          onMouseDown={this.onCanvasMouseDown}
          onMouseUp={this.onCanvasMouseUp}
        />
      </div>
    );
  }
}

export default Canvas;

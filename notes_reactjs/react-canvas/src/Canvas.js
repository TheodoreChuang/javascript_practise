import React, { Component } from "react";
import ColorSelector from "./ColorSelector";
import LineWidthSelector from "./LineWidthSelector";

class Canvas extends Component {
  state = {
    hex: "#0000FF",
    lineWidth: 2,
    width: 400,
    height: 400,
    coords: null
  };

  // Constructor required for DOM Ref
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.context = null;
  }

  // ***** Lifecycle *****

  componentDidMount() {
    this.context = this.canvasRef.current.getContext("2d");
  }

  componentDidUpdate() {
    // console.log("Canvas state: ", this.state);
    this.setContext();
  }

  setContext() {
    this.context = this.canvasRef.current.getContext("2d");
    this.context.strokeStyle = this.state.hex;
    this.context.lineJoin = "round";
    this.context.lineWidth = this.state.lineWidth;
  }

  // ***** Set Up Controls *****

  // Callback for Lifting State to Parent
  onColorSelectorChange = hex => {
    this.setState({ hex });
  };

  onLineWidthChange = lineWidth => {
    this.setState({ lineWidth });
  };

  onClearButtonClick = () => {
    this.context.clearRect(
      0,
      0,
      this.context.canvas.width,
      this.context.canvas.height
    );
  };

  onSaveButtonClick = () => {
    const canvasData = this.canvasRef.current.toDataURL();
    localStorage.setItem("canvas0", canvasData);
  };

  onLoadButtonClick = () => {
    const savedImageData = localStorage.getItem("canvas0");
    if (savedImageData !== null) {
      const imageObj = new Image();
      imageObj.onload = () => {
        this.context.drawImage(imageObj, 0, 0);
      };
      imageObj.src = savedImageData;
    }
  };

  // ***** Canvas Events *****

  onCanvasMouseDown = event => {
    const x = event.nativeEvent.offsetX;
    const y = event.nativeEvent.offsetY;
    this.setState({ coords: [x, y] });
  };

  onCanvasMouseUp = event => {
    this.setState({ coords: null });
  };

  // onCanvasMouseLeave ? to handle bug when quickly leaving in/out

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

          <LineWidthSelector onLineWidthChange={this.onLineWidthChange} />

          <button onClick={this.onClearButtonClick}>Clear Canvas</button>

          <button onClick={this.onSaveButtonClick}>Save Canvas</button>

          <button onClick={this.onLoadButtonClick}>Load Previous Canvas</button>
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

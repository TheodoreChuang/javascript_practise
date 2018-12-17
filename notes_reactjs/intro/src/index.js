import React from "react";
import ReactDOM from "react-dom";

const Greeting = () => {
  return <p>Bonjour!</p>;
};

const App = () => {
  return (
    <div>
      <Greeting />
      <Greeting />
      <Greeting />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

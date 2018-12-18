import React from "react";

const Card = props => {
  return (
    <div style={{ backgroundColor: "gray" }}>
      <h3>{props.title}</h3>
      {props.children}
    </div>
  );
};

export default Card;

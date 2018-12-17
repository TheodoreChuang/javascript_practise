import React from "react";

function FavFood(props) {
  return (
    <div>
      <h4>{props.food}</h4>
      <img src={props.image} alt={props.alt} />
      <p>
        Best time to eat: <span>{props.time}</span>
      </p>
      <p>
        Best place: <span>{props.place}</span>
      </p>
    </div>
  );
}

export default FavFood;

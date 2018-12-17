import React from "react";

import FavFood from "./FavFood";
import FavFoodsData from "../../data/favFoodsData";

const FavFoods = () => {
  return (
    <section id="fav-foods">
      <h2>Favourite Foods</h2>

      {FavFoodsData.map(food => (
        <FavFood {...food} />
      ))}
    </section>
  );
};

export default FavFoods;

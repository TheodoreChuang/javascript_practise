import React from "react";
import Grid from "@material-ui/core/Grid";

import FavFood from "./FavFood";
import FavFoodsData from "../../data/favFoodsData";

const FavFoods = () => {
  return (
    <section id="fav-foods">
      <h2>Favourite Foods</h2>

      <Grid container spacing={24} justify="space-evenly" alignItems="center">
        {FavFoodsData.map(food => (
          <Grid item sm={12} md={6}>
            <FavFood {...food} key={food.food} />
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default FavFoods;

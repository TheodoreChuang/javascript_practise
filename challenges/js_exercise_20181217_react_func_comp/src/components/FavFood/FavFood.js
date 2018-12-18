import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    maxWidth: 345,
    margin: "0px auto 30px auto"
  }
};

function FavFood(props) {
  return (
    <Card style={styles.card}>
      <CardMedia
        component="img"
        alt={props.alt}
        height="300"
        image={props.image}
        title={props.food}
      />
      <CardContent>
        <Typography variant="h4" gutterBottom>
          {props.food}
        </Typography>
        <Typography component="p" variant="h5" gutterBottom>
          Best time to eat: <span>{props.time}</span>
        </Typography>
        <Typography component="p" variant="h5" gutterBottom>
          Best place: <span>{props.place}</span>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default FavFood;

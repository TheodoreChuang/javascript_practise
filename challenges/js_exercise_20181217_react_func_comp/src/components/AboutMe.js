import React from "react";
import Grid from "@material-ui/core/Grid";
// import List from "@material-ui/core/List";

import Profile from "./../images/Profile.jpg";

const aboutList = [
  <li key="Pop">
    <b>Pop</b> culture maven. Beer fan. Award-winning music junkie. Extreme
    coffee enthusiast. Thinker. Tv specialist.
  </li>,
  <li key="Friendly">
    <b>Friendly</b> web maven. Bacon lover. General internet specialist.
    Incurable travel scholar.
  </li>,
  <li key="Subtly">
    <b>Subtly</b> charming twitter lover. Social media fan. Incurable travel
    geek. Lifelong pop culture specialist. Tv scholar.
  </li>,
  <li key="Unable">
    <b>Unable</b> to type with boxing gloves on. Proud bacon fan. Music junkie.
    Coffee ninja. Beer specialist.
  </li>
];

const AboutMe = () => {
  return (
    <section id="about-me">
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="flex-start"
      >
        <Grid item sm={12} md={4} style={{ textAlign: "center" }}>
          <h2>About Me</h2>
          <img src={Profile} alt="profile" style={{ borderRadius: "50%" }} />
        </Grid>
        <Grid item sm={12} md={8}>
          <article>
            <ol>{aboutList}</ol>
          </article>
        </Grid>
      </Grid>
    </section>
  );
};

export default AboutMe;

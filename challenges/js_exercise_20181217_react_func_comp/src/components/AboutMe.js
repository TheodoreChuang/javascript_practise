import React from "react";

import Profile from "./../images/Profile.jpg";

const AboutMe = () => {
  return (
    <section id="about-me">
      <h2>About Me</h2>
      <img src={Profile} alt="profile" />
      <article>
        <ol>
          <li>
            <p>
              <b>Pop</b> culture maven. Beer fan. Award-winning music junkie.
              Extreme coffee enthusiast. Thinker. Tv specialist.
            </p>
          </li>
          <li>
            <p>
              <b>Friendly</b> web maven. Bacon lover. General internet
              specialist. Incurable travel scholar.
            </p>
          </li>
          <li>
            <p>
              <b>Subtly</b> charming twitter lover. Social media fan. Incurable
              travel geek. Lifelong pop culture specialist. Tv scholar.
            </p>
          </li>
          <li>
            <p>
              <b>Unable</b> to type with boxing gloves on. Proud bacon fan.
              Music junkie. Coffee ninja. Beer specialist.
            </p>
          </li>
        </ol>
      </article>
    </section>
  );
};

export default AboutMe;

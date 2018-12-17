import React from "react";

import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import FavFoods from "./components/FavFood/FavFoods";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div class="container">
      <Header />
      <AboutMe />
      <FavFoods />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

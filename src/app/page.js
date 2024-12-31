import React from "react";
import RecipeList from "./recipe/page";
import MainHome from "./home/home";
import About from "./about/page";
import ContactPage from "./contact/page";

const Homepage = () => {
  return (
    <div>
      <MainHome />
      <RecipeList />
      <About />
      <ContactPage />
    </div>
  );
};

export default Homepage;

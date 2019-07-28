import React from "react";
import "./MainContainer.css";
import wand2 from "../images/wand2.png";

export const MainContainer = () => {
  return (
    <section>
      <h1>Welcome to the wizarding world of Harry Potter!</h1>
      <p>Please choose a category above. <img src={wand2} alt="wand" className="wand" /></p>
    </section>
  );
};

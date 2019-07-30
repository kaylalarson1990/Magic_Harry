import React from "react";
import "./Error.css";
import sortinghat from "../images/sortinghat.png";

const Error = () => {
  return (
    <section>
      <h2 className="page-not-found">
        404 ERROR: PAGE NOT FOUND{" "}
        <img src={sortinghat} alt="wand" className="sorting-hat" />
      </h2>
    </section>
  );
};

export default Error;

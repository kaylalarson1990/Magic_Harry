import React from "react";
import Card from "../Card/Card.jsx";
import "./Favorites.css";
import PropTypes from "prop-types";

const Favorites = ({ favorites, favoriteCard }) => {
  const showFavorites = favorites.map(fav => {
    return <Card info={fav} key={fav.created} favoriteCard={favoriteCard} />;
  });

  return (
    <article>
      <h2 className="title">Favorites</h2>
      <section className="fav-container">
        {!favorites.length ? (
          <h2 className="favorites">
            <i /> No Favorites Available
          </h2>
        ) : (
          showFavorites
        )}
      </section>
    </article>
  );
};

Favorites.propTypes = {
  favorites: PropTypes.array,
  favoriteCard: PropTypes.func
};

export default Favorites;

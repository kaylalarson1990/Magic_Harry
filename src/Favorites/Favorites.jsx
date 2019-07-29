import React from "react";
import Houses from "../Houses/Houses.jsx";
import Characters from "../Characters/Characters.jsx";
import Spells from "../Spells/Spells.jsx";
import "./Favorites.css";
import PropTypes from "prop-types";

const Favorites = ({ favorites, favoriteCard }) => {
  const showFavorites = favorites.map(fav => {
      console.log('1', fav)
    return (
      <>
        <Houses info={fav} key={fav.created} favoritedCard={favoriteCard} />
        <Characters info={fav} key={fav.created} favoritedCard={favoriteCard} />
        <Spells info={fav} key={fav.created} favoritedCard={favoriteCard} />
      </>
    );
  });

  return (
    <main className="fav-container">
      {!favorites.length ? (
        <h2 className="favorites">
          <i /> No Favorites Available
        </h2>
      ) : (
        showFavorites
      )}
    </main>
  );
};

Favorites.propTypes = {
  favorites: PropTypes.array,
  favoriteCard: PropTypes.func
};

export default Favorites;

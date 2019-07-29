import React from "react";
import Houses from "../Houses/Houses.jsx";
import Characters from "../Characters/Characters.jsx";
import Spells from "../Spells/Spells.jsx";
import "./Favorites.css";
import PropTypes from "prop-types";

const Favorites = ({ favorites, favoriteCard }) => {
  const showFavoriteHouses = favorites.map(favHouse => {
    return (
      <Houses
        info={favHouse}
        key={favHouse.created}
        favoritedCard={favoriteCard}
      />
    );
  });
  const showFavoriteCharacters = favorites.map(favChar => {
    return (
      <Characters
        info={favChar}
        key={favChar.created}
        favoritedCard={favoriteCard}
      />
    );
  });
  const showFavoriteSpells = favorites.map(favSpells => {
    return (
      <Spells
        info={favSpells}
        key={favSpells.created}
        favoritedCard={favoriteCard}
      />
    );
  });

  return (
    <main className="fav-container">
      {!favorites.length ? (
        <h2 className="favorites">
          <i /> No Favorites Available
        </h2>
      ) : (
        showFavoriteHouses,
        showFavoriteCharacters,
        showFavoriteSpells
      )}
    </main>
  );
};

Favorites.propTypes = {
  favorites: PropTypes.array,
  favoriteCard: PropTypes.func
};

export default Favorites;

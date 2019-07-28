import React from 'react';
import Houses from '../Houses/Houses.jsx';
import Characters from '../Characters/Characters.jsx';
import Spells from '../Spells/Spells.jsx';
import PropTypes from 'prop-types';

const Favorites = ({ favorites, favoriteCard }) => {
    const showFavorites = favorites.map(fav => {
        console.log(fav)
        return (<>
            <Houses info={fav} key={fav.created} favoritedCard={favoriteCard} />
            <Characters info={fav} key={fav.created} favoritedCard={favoriteCard} />
            <Spells info={fav} key={fav.created} favoritedCard={favoriteCard} />
            </>
        )
    })

    return(
        <main className="fav-container">
            {!favorites.length ? (
                <h2>
                    <i /> No Favorites Available
                </h2>
            ) : showFavorites
            }
            </main>
    )
}

export default Favorites;
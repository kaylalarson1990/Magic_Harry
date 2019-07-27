import { combineReducers } from "redux";
import { charactersReducer } from "./charactersReducer";
import { housesReducer } from "./housesReducer";
import { spellsReducer } from "./spellsReducer";
import { favoriteReducer } from "./favoriteReducer";

const rootReducer = combineReducers({
    characters: charactersReducer,
    houses: housesReducer,
    spells: spellsReducer,
    favorites: favoriteReducer
})

export default rootReducer;

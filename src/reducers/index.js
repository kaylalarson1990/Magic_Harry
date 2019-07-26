import { combineReducers } from "redux";
import { charactersReducer } from "./charactersReducer";
import { housesReducer } from "./housesReducer";
import { spellsReducer } from "./spellsReducer";

const rootReducer = combineReducers({
    characters: charactersReducer,
    houses: housesReducer,
    spells: spellsReducer
})

export default rootReducer;

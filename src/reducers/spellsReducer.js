export const spellsReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_SPELLS":
      return action.spells;
    default:
      return state;
  }
};

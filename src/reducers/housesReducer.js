export const housesReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_HOUSES":
      return action.houses;
    default:
      return state;
  }
};

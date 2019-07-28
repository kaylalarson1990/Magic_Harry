import {housesReducer} from './housesReducer.js';

describe("housesReducer", () => {
    it("should return the initial state", () => {
      const expected = [];
      const result = housesReducer(undefined, {});
      expect(result).toEqual(expected);
    });
  
    it("should set all characters from state", () => {
      const action = {
        type: "SET_HOUSES",
        houses: "Slytherin"
      };
      const expected = "Slytherin";
      const result = housesReducer(undefined, action);
      expect(result).toEqual(expected);
    });
  });
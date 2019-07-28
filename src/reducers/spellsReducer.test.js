import {spellsReducer} from './spellsReducer.js';

describe("spellsReducer", () => {
    it("should return the initial state", () => {
      const expected = [];
      const result = spellsReducer(undefined, {});
      expect(result).toEqual(expected);
    });
  
    it("should set all characters from state", () => {
      const action = {
        type: "SET_SPELLS",
        spells: "Accio"
      };
      const expected = "Accio";
      const result = spellsReducer(undefined, action);
      expect(result).toEqual(expected);
    });
  });
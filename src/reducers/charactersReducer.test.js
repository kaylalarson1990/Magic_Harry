import { charactersReducer } from "./charactersReducer.js";

describe("charactersReducer", () => {
  it("should return the initial state", () => {
    const expected = [];
    const result = charactersReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it("should set all characters from state", () => {
    const action = {
      type: "SET_CHARACTERS",
      characters: "Ludo Bagman"
    };
    const expected = "Ludo Bagman";
    const result = charactersReducer(undefined, action);
    expect(result).toEqual(expected);
  });
});

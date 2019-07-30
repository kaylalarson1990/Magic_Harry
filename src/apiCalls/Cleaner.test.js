import { cleanCharacters, cleanHouses, cleanSpells } from "./Cleaner.js";

describe("cleanCharacters", () => {
  it("should return a cleaned character", () => {
    const mockCharacter = {
      id: undefined,
      name: "Kayla",
      role: "Student",
      house: "n/a",
      school: "Turing",
      species: "Human"
    };

    const expected = [
      {
        ...mockCharacter
      }
    ];
    const result = cleanCharacters([mockCharacter]);
    expect(result).toEqual(expected);
  });
});

describe("cleanSpells", () => {
  it("should return a cleaned spell", () => {
    const mockSpell = {
      id: undefined,
      spell: "Accio",
      type: "Sleeping",
      effect: "Puts you to sleep"
    };

    const expected = [
      {
        ...mockSpell
      }
    ];
    const result = cleanSpells([mockSpell]);
    expect(result).toEqual(expected);
  });
});

describe("cleanHouses", () => {
  it("should return a cleaned house", () => {
    const mockHouse = {
      id: undefined,
      name: "Slytherin",
      mascot: "Klio",
      "head of house": undefined,
      "house ghost": undefined,
      founder: "Sergio",
      school: "Turing"
    };

    const expected = [
      {
        ...mockHouse
      }
    ];
    const result = cleanHouses([mockHouse]);
    expect(result).toEqual(expected);
  });
});

import {
  harryPotterCharacters,
  harryPotterHouses,
  harryPotterSpells
} from "./apiCalls.js";

describe("harryPotterCharacters", () => {
  let mockData;

  beforeEach(() => {
    mockData = [
      {
        house: "Ravenclaw",
        id: undefined,
        name: "Padma Patil",
        role: "student",
        school: "Hogwarts School of Witchcraft and Wizardry",
        species: "human"
      }
    ];

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockData)
      });
    });
  });

  it("should be called with the correct params", () => {
    const expected = [
      "https://www.potterapi.com/v1/characters/?key=$2a$10$hxctXuUXNqCUal8Ok52W0eowhhCv1ePELQwL1D52uypzZRjVKg4kO"
    ];

    harryPotterCharacters(mockData);
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });

  it("should return a parsed response if status is ok", async () => {
    const result = await harryPotterCharacters(mockData);
    expect(result).toEqual(mockData);
  });

  it("should throw an error if response is not ok", () => {
    window.fetch = jest.fn().mockImplementationOnce(() => {
      return Promise.resolve({
        ok: false
      });
    });
    expect(harryPotterCharacters()).resolves.toEqual(
      Error("Error fetching wizards")
    );
  });
});

describe("harryPotterHouses", () => {
  let mockHouses;

  beforeEach(() => {
    mockHouses = [
      {
        founder: "Goderic Gryffindor",
        "head of house": undefined,
        "house ghost": undefined,
        id: undefined,
        mascot: "lion",
        name: "Gryffindor",
        school: "Hogwarts School of Witchcraft and Wizardry"
      }
    ];

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockHouses)
      });
    });
  });

  it("should be called with the correct params", () => {
    const expected = [
      "https://www.potterapi.com/v1/houses/?key=$2a$10$hxctXuUXNqCUal8Ok52W0eowhhCv1ePELQwL1D52uypzZRjVKg4kO"
    ];

    harryPotterHouses(mockHouses);
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });

  it("should return a parsed response if status is ok", async () => {
    const result = await harryPotterHouses(mockHouses);
    expect(result).toEqual(mockHouses);
  });

  it("should return an error if response is not ok", () => {
    window.fetch = jest.fn().mockImplementationOnce(() => {
      return Promise.resolve({
        ok: false
      });
    });

    expect(harryPotterHouses()).resolves.toEqual(
      Error("Error fetching wizard houses")
    );
  });
});

describe("harryPotterSpells", () => {
  let mockSpells;

  beforeEach(() => {
    mockSpells = [
      {
        effect: "opens objects",
        id: undefined,
        spell: "Aberto",
        type: "Charm"
      }
    ];

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockSpells)
      });
    });
  });

  it("should be called with the correct params", () => {
    const expected = [
      "https://www.potterapi.com/v1/spells/?key=$2a$10$hxctXuUXNqCUal8Ok52W0eowhhCv1ePELQwL1D52uypzZRjVKg4kO"
    ];

    harryPotterSpells(mockSpells);
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });

  it("should return a parsed response if status is ok", async () => {
    const result = await harryPotterSpells(mockSpells);
    expect(result).toEqual(mockSpells);
  });

  it("should return an error if response is not ok", () => {
    window.fetch = jest.fn().mockImplementationOnce(() => {
      return Promise.resolve({
        ok: false
      });
    });

    expect(harryPotterSpells()).resolves.toEqual(
      Error("Error fetching wizard spells")
    );
  });
});

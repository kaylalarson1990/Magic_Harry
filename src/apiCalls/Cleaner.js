export const cleanCharacters = characters => {
  return characters.map(character => ({
    id: character._id,
    name: character.name,
    role: character.role,
    house: character.house || "n/a",
    school: character.school || "n/a",
    species: character.species
  }));
};

export const cleanHouses = houses => {
  return houses.map(house => ({
    id: house._id,
    name: house.name,
    mascot: house.mascot,
    "head of house": house.headOfHouse,
    "house ghost": house.houseGhost,
    founder: house.founder,
    school: house.school
  }));
};

export const cleanSpells = spells => {
  return spells.map(spell => ({
    id: spell._id,
    spell: spell.spell,
    type: spell.type,
    effect: spell.effect
  }));
};

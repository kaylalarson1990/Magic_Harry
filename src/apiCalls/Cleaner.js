export const cleanCharacters = (characters) => {
    return characters.map(character => ({
        id: character._id,
        name: character.name,
        role: character.role,
        house: character.house,
        school: character.school,
        species: character.species
    }))
}

export const cleanHouses = (houses) => {
    return houses.map(house => ({
        id: house._id,
        name: house.name,
        mascot: house.mascot,
        headOfHouse: house.headOfHouse,
        houseGhost: house.houseGhost,
        founder: house.founder,
        school: house.school,
        members: house.members
    }))
}
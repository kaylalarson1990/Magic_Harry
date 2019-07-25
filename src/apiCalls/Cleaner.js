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
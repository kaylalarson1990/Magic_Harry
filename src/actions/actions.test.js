import * as actions from './index';

describe('actions', () => {
    it('should have a type of SET_CHARACTERS', () => {
        const characters = {characters: "Ludo Bagman"};
        const expectedAction = {
            type: "SET_CHARACTERS",
            characters: characters
        }
        const result = actions.setCharacters(characters);
        expect(result).toEqual(expectedAction);
    })

    it('should have a type of SET_HOUSES', () => {
        const houses = {houses: "Hufflepuff"};
        const expectedAction = {
            type: "SET_HOUSES",
            houses: houses
        }
        const result = actions.setHouses(houses);
        expect(result).toEqual(expectedAction);
    })

    it('should have a type of SET_SPELLS', () => {
        const spells = {spells: "Wingardium Leviosa"};
        const expectedAction = {
            type: "SET_SPELLS",
            spells: spells
        }
        const result = actions.setSpells(spells);
        expect(result).toEqual(expectedAction);
    })
})
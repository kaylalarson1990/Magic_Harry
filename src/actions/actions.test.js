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
})
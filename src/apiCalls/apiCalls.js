import { cleanCharacters, cleanHouses, cleanSpells } from "./Cleaner";
import { key } from "./apiKey";

export const harryPotterCharacters = () => {
  return fetch(
    `https://www.potterapi.com/v1/characters/?key=${key}`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response);
      } else {
        return response.json();
      }
    })
    .then(data => cleanCharacters(data))
    .catch(error => Error("Error fetching wizards"));
};

export const harryPotterHouses = () => {
  return fetch(
    `https://www.potterapi.com/v1/houses/?key=${key}`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response);
      } else {
        return response.json();
      }
    })
    .then(data => cleanHouses(data))
    .catch(error => Error("Error fetching wizard houses"));
};

export const harryPotterSpells = () => {
  return fetch(
    `https://www.potterapi.com/v1/spells/?key=${key}`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response);
      } else {
        return response.json();
      }
    })
    .then(data => cleanSpells(data))
    .catch(error => Error("Error fetching wizard spells"));
};

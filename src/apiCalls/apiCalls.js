import { cleanCharacters, cleanHouses } from './Cleaner'

export const harryPotterCharacters = () => {
    return fetch('https://www.potterapi.com/v1/characters/?key=$2a$10$hxctXuUXNqCUal8Ok52W0eowhhCv1ePELQwL1D52uypzZRjVKg4kO')
    .then(response => response.json())
    .then(data => cleanCharacters(data))
    .catch(error => Error("Error fetching wizards"))
}

export const harryPotterHouses = () => {
    return fetch('https://www.potterapi.com/v1/houses/?key=$2a$10$hxctXuUXNqCUal8Ok52W0eowhhCv1ePELQwL1D52uypzZRjVKg4kO')
    .then(response => response.json())
    .then(data => cleanHouses(data))
    .catch(error => Error("Error fetching wizard houses"))
}

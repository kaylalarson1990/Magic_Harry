export const harryPotter = () => {
    return fetch('https://www.potterapi.com/v1/characters/?key=$2a$10$hxctXuUXNqCUal8Ok52W0eowhhCv1ePELQwL1D52uypzZRjVKg4kO')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => Error("Error fetching wizards"))
}
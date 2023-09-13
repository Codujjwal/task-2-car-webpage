// Sample data for Most Searched Cars and Latest Cars
const mostSearchedCarsData = [
    "Toyota Camry",
    "Honda Civic",
    "Ford Mustang",
    "Nissan Altima",
    "Chevrolet Malibu"
];

const latestCarsData = [
    "2023 BMW X5",
    "2023 Mercedes-Benz C-Class",
    "2023 Audi A6",
    "2023 Toyota Corolla",
    "2023 Ford Explorer"
];

// Function to populate a list
function populateList(listId, data) {
    const list = document.getElementById(listId);
    data.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        list.appendChild(listItem);
    });
}

// Populate Most Searched Cars and Latest Cars lists
window.onload = function() {
    populateList("mostSearchedCars", mostSearchedCarsData);
    populateList("latestCars", latestCarsData);
};

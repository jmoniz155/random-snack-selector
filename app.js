function pickFood() {
    var pick;
    var chips = [
        "Nacho Doritos",
        "Takis",
        "Pork Grinds",
        "Pretzels",
    ];

    var sweets = [
        "Brownies",
        "Donuts",
        "Cupcakes",
        "Cookies",
    ];

    var fruits = [
        "Apples",
        "Bananas",
        "Strawberries",
        "Pears",
    ];

    var foodOptions = [];

    if (confirm("Include chips?")) {
        foodOptions = foodOptions.concat(chips);
    }

    if (confirm("Include sweets?")) {
        foodOptions = foodOptions.concat(sweets);
    }

    if (confirm("Include fruits?")) {
        foodOptions = foodOptions.concat(fruits);
    }

    if (foodOptions.length === 0) {
        alert("You must choose at least one snack!");
        return pickFood();
    }

    pick = foodOptions[Math.floor(Math.random() * foodOptions.length)];

    showFood(pick);

}

pickFood();

function showFood(food) {
var foodEl = document.createElement("h1");
foodEl.textContent = "Your snack of the day is " + food + "!";
document.body.appendChild(foodEl);
}

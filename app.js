function showSnack(food) {
    var foodEl = document.createElement("h1");
    foodEl.textContent = "Your snack of the day is" + food + "!";
    document.body.appendChild(foodEl);
}
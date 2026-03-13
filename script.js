console.log("Hello World!");
// 1. Create an array called favoriteFoods with at least 6 foods you love.
let favoriteFoods = ["Mac N Cheese","Taquitos", "Cereal", "Perogies", "New York Strip", "Pizza" ];

// 2. Loop through the list and print: "One of my favorite foods is ______."





// 3. Print out the rating for each food with a ranking like:
// "My #1 favorite food is Ramen" (copy/paste for all items)
// "My #2 favorite food is Sushi"
// ...etc.





// 4a. Create a function printFoodRecommendation(foodName) that prints out the following for the foodName provided
    // "Have you ever tried ____?"
    // "I always recommend ____ to friends."
    // "Trust me — ____ is delicious."




// 4b. Call the function at least 3 times



// Here's a list of 50 friends' favorite foods:
let friendFavorites = [
    "Pizza", "Sushi", "Pasta", "Falafel", "Burgers", "Ramen", "Pad Thai", "Curry", "Pho", "Nachos", "Gnocchi", "Donuts", "Steak", "Lasagna", "Biryani", "Tacos", "Croissant", "Churros", "Fried Rice", "Shawarma", "Miso Soup", "BBQ Ribs", "Hotpot", "Enchiladas", "Baklava", "Gyros", "Hummus", "Empanadas", "Pancakes", "Muffins", "Samosas", "Macarons", "Quiche", "Pierogi", "Arepas", "Okonomiyaki", "Ceviche", "Brisket", "Bao Buns", "Poutine", "Clam Chowder", "Fajitas", "Canelé", "Kimchi", "Tamales", "Omelette", "Biscuits", "Tempura", "Spring Rolls", "Crepes"
  ];

// 5. Print out only foods that have an "a" in the name. For example, "Donuts" would not be included, but  would be "Pizza".
for (let food of friendFavorites) { 
  if (food.includes("a")) {
    console.log(food);
  }
}

// 6. Store the result in an array called foodsWithA. Print out the array.



// 7. Create a new array longFoodNames for foods with names longer than 6 characters.
let longFoodNames = [];
for (let food of friendFavorites) { 
  if (food.length <= 6) {
    longFoodNames.push(food);
  }}
console.log(longFoodNames);

// 8. Create another array shortFoodNames for foods 6 characters or shorter.
let shortFoodNames = [];
for (let food of friendFavorites) { 
  if (food.length <= 6) {
    shortFoodNames.push(food);
  }}
console.log(shortFoodNames);

// 9. Print both arrays and compare:
// "There are more long-named foods." OR "There are more short-named foods."
console.log(longFoodNames);
console.log(shortFoodNames);
if (shortFoodNames.length) > (longFoodNames.length);{
  print("There are more short-named foods.");}
else{
  print("There are more long-named foods.");}

// 10. STRETCH: Find the longest food name and print:
// "The longest food name in the list is ______ with ___ characters."

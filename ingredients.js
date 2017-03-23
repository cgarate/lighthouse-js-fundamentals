var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var i = 0;
console.log("List Ingredients with While");
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

// Write a for loop that prints out the contents of ingredients:
i = 0;
console.log("List Ingredients with For");
for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
i = ingredients.length - 1;
console.log("List Ingredients backwards with While");
while (i >= 0) {
  console.log(ingredients[i]);
  i--;
}
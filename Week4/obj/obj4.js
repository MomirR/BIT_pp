// Write a function that creates an object that represents a culinary recipe. Each recipe is described by: name, type of cuisine, complexity (value from 1 to 5), 
// list of ingredients, preparing time, preparing instruction. 
// Add a method that prints out all the ingredients necessary for the meal preparation. 
// Add a method that checks if a meal can be prepared for 15 minutes. 
// Add a method that changes the type of cuisine to the given value. 
// Add a method that delete a given ingredient from the list of ingredients.  

function createCulinaryRecipe(name, typeOfCuisine, complexity, listOfIngredients, preparingTime, preparingInstruction) {
    return {
        name: name,
        typeOfCuisine: typeOfCuisine,
        complexity: complexity,
        listOfIngredients: listOfIngredients,
        preparingTime: preparingTime,
        preparingInstruction: preparingInstruction,

        printIngredients: function () {
            return this.listOfIngredients;
        },

        cookingTime: function () {
            if (this.preparingTime <= 15) {
                return "It can be cooked in less then 15min."
            } else {
                return "It can't be cooked whit in 15min."
            }
        },

        changingType: function (type) {
            return this.typeOfCuisine = type;
        },

        deletingIngredient: function (ingredient) {
            var newIngredient = [];
            for (i = 0, j = 0; i < this.listOfIngredients.length; i++) {
                if (this.listOfIngredients[i] !== ingredient) {
                    newIngredient[j] = ingredient[i];
                    j++;
                }
            }
        }
    }
}

var newObj = createCulinaryRecipe("Hleb", "neki tip :-D", 3, ["brasno", "kvasac", "voda"], 13, "Uzmi brate i samo mesi!");
console.log(newObj.cookingTime());

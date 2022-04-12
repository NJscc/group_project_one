console.log("linked!")

// Click event - movie submit button
// Click event - recipe submit button 
// Click event - randomize both catergory button 
// fetch movie API & test 

var recipeKey: "5d9d9161103948ad9e6c3089d7430d7a";

// test JSON URL for pasta recipes:
var url: "https://api.spoonacular.com/recipes/complexSearch?apiKey=5d9d9161103948ad9e6c3089d7430d7a&query=pasta"

// cuisine URLS for recipe dropdown categories
//https://api.spoonacular.com/recipes/complexSearch?apiKey=5d9d9161103948ad9e6c3089d7430d7a&query=americancuisine
//https://api.spoonacular.com/recipes/complexSearch?apiKey=5d9d9161103948ad9e6c3089d7430d7a&query=chinese
//https://api.spoonacular.com/recipes/complexSearch?apiKey=5d9d9161103948ad9e6c3089d7430d7a&query=french
//https://api.spoonacular.com/recipes/complexSearch?apiKey=5d9d9161103948ad9e6c3089d7430d7a&query=indian
//https://api.spoonacular.com/recipes/complexSearch?apiKey=5d9d9161103948ad9e6c3089d7430d7a&query=italian
//https://api.spoonacular.com/recipes/complexSearch?apiKey=5d9d9161103948ad9e6c3089d7430d7a&query=mexican
//https://api.spoonacular.com/recipes/complexSearch?apiKey=5d9d9161103948ad9e6c3089d7430d7a&query=mediterranean
//https://api.spoonacular.com/recipes/complexSearch?apiKey=5d9d9161103948ad9e6c3089d7430d7a&query=spanish
//https://api.spoonacular.com/recipes/complexSearch?apiKey=5d9d9161103948ad9e6c3089d7430d7a&query=thai
//https://api.spoonacular.com/recipes/complexSearch?apiKey=5d9d9161103948ad9e6c3089d7430d7a&query=vietnamese


// recipe search results appear on page 
$("#btnSubmit").on("click", clickRecipes)

functiion clickRecipes(event) {
    event.preventDefault()
    var recipe = $();
}

// ~~~ // 
// movie dropdown list categories 
// movie search results appear on page 
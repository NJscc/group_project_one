console.log("linked!")

// Click event - movie submit button
// Click event - recipe submit button 
// Click event - randomize both catergory button 
// fetch movie API & test 

var recipeKey = "5d9d9161103948ad9e6c3089d7430d7a";

// recipe search on click
$(".submitSearch").on("click", clickRecipes);

function clickRecipes(event) {
    event.preventDefault()
    var recipe = $("#format-input");
    var recipesLink = "https://api.spoonacular.com/recipes/complexSearch?apiKey=5d9d9161103948ad9e6c3089d7430d7a&query=" + recipe 
    fetch(recipesLink).then(function(response) {
        return response.json()
    }).then(function(data) {
        recipeChoices(data[0])
    })};

function recipeChoices() {
    var recipesLink = "https://api.spoonacular.com/recipes/complexSearch?apiKey=5d9d9161103948ad9e6c3089d7430d7a&query="
    fetch(recipesLink).then(function(response) {
        return response.json()
    }).then(function(data){
})
}

// recipes appear on page 
// randomize recipes
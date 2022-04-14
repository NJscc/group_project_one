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
    var recipe = $("#format-input").val();
    console.log(recipe)
    var recipesLink = "https://api.spoonacular.com/recipes/complexSearch?apiKey=5d9d9161103948ad9e6c3089d7430d7a&query=" + recipe 
    fetch(recipesLink).then(function(response) {
        return response.json()
    }).then(function(data) {
        console.log(data)
        console.log((data.results[0].title))
        recipeChoices((data.results[0].id))
    })};

function recipeChoices(selectedRecipe) {
    var recipesLink = `https://api.spoonacular.com/recipes/${selectedRecipe}/information?apiKey=5d9d9161103948ad9e6c3089d7430d7a&includeNutrition=false`
// from recipe list that is returned - pick one 
// find on the API site how to search for 1 recipe and use the selected recipe to perform the search 
// with the data, console log, identify what we want 
// list the information on the page 
    fetch(recipesLink).then(function(response) {
        return response.json()
    }).then(function(data){ 
        console.log(data)

})}
// recipes appear on page 
// randomize recipes
// Movie API key: http://www.omdbapi.com/?i=tt3896198&apikey=a32a6988
// Made to changes allow program to run

$("#submitMovie").on("click", clickMovies);

function clickMovies(event) {
    event.preventDefault()
    var randomId = Math.floor(1000000 + Math.random() * 900000)
    // var movies = $("#format-films").val();
    // console.log(movies)
    var moviesLink = "http://www.omdbapi.com/?i=tt" + randomId + "&apikey=a32a6988"
    fetch(moviesLink).then(function(response) {
        return response.json()
    }).then(function(data) {
        console.log(data)
        // console.log((data.results[0].title))
})
};

// function movieChoices() {
//     var moviesLink = "http://www.omdbapi.com/?i=tt3896198&apikey=a32a6988"
//     fetch(moviesLink).then(function(response) {
//         return response.json()
//     }).then(function(data) {
//         console.log(data)
//         // 
    // })}




console.log("linked!")

// Click event - movie submit button
// Click event - recipe submit button
// Click event - randomize both catergory button
// fetch movie API & test

// API keys 
var recipeKey = "404831a23c754a47a7662c3232089211";
var movieKey = "";

// recipe search on click
$("#submitRecipe").on("click", clickRecipes);

// display recipes 
function renderResult(imageUrl, summary, title) {
    $();
    var resultDivEl = $('.result');
    var resultOneDivEl = $('<div></div>');
    var imageEl = $('<img/>');
    var mealInfoDivEl = $('<div></div>');
    var titleEl = $('<h3></h3>');
    var descriptionEl = $('<p></p>');

    // imageEl.src = data.image
    imageEl.attr('src', imageUrl)
    imageEl.attr('id', "recipeImage")
    titleEl.text(title)
    descriptionEl.html(summary)
    resultOneDivEl.addClass('resultOne');
    mealInfoDivEl.addClass('mealInfo');
    titleEl.addClass('title')
    descriptionEl.addClass('description');
    mealInfoDivEl.append(titleEl)
    mealInfoDivEl.append(descriptionEl)
    resultOneDivEl.append(imageEl)
    resultOneDivEl.append(mealInfoDivEl)
    resultDivEl.append(resultOneDivEl);
}

renderResult('#', 'Description', 'title');

// search recipes
function clickRecipes(event) {
    event.preventDefault()
    var recipe = $("#format-input").val();
    console.log(recipe)
    var recipesLink = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${recipeKey}&query=${recipe}`
    fetch(recipesLink).then(function (response) {
        return response.json()
    }).then(function (data) {
        console.log(data)
        console.log((data.results[0].title))
        recipeChoices((data.results[0].id))
    })};

// generate a random recipe 
function recipeRandom(event) {
    event.preventDefault();
    var recipesLink = `https://api.spoonacular.com/recipes/random?apiKey=${recipeKey}`;
    fetch(recipesLink).then(function (response) {
        return response.json()
    }).then(function (data) {
        console.log(data)
        console.log((data.recipes[0].title))
        recipeChoices((data.recipes[0].id))
    })};

function recipeChoices(selectedRecipe) {
    var recipesLink = `https://api.spoonacular.com/recipes/${selectedRecipe}/information?apiKey=${recipeKey}&includeNutrition=false`
    // from recipe list that is returned - pick one
    // find on the API site how to search for 1 recipe and use the selected recipe to perform the search
    // with the data, console log, identify what we want
    // list the information on the page
    fetch(recipesLink).then(function (response) {
        return response.json()
    }).then(function (data) {
        renderResult(data.image, data.summary, data.title)
        console.log(data.title)
        console.log(data.image)
        console.log(data.summary)
})}


$(".submitMovie").on("click", movieChoices);

function clickMovies(event) {
    event.preventDefault()
    var movies = $("#format-films").val();
    console.log(movies)
    var moviesLink = "" + movies
    fetch(moviesLink).then(function (response) {
        return response.json()
    }).then(function (data) {
        console.log(data)
        console.log((data.results[0].title))
        movieChoices((data.results[0].id))
    })
};

function movieChoices() {
    var moviesLink = ""
    fetch(moviesLink).then(function (response) {
        return response.json()
    }).then(function (data) {
        console.log(data)
        //
    })
}

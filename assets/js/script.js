// API keys 
var recipeKey = "404831a23c754a47a7662c3232089211";
var movieKey = "4be7ed153405ba5d49bb9853e69b1f03";

// recipe search on click
$("#submitRecipe").on("click", clickRecipes);

// movie search on click 
// display movie selected
// display random movie 
// display random movie AND recipe 


// display recipes on page
function renderResult(imageUrl, summary, title) {
    $('.meal .resultOne').remove();
    var resultDivEl = $('.result');
    var resultOneDivEl = $('<div></div>');
    var imageEl = $('<img/>');
    var mealInfoDivEl = $('<div></div>');
    var titleEl = $('<h3></h3>');
    var descriptionEl = $('<p></p>');
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

// search recipes on click
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

// generate selected recipe
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


// $(".submitMovie").on("click", movieChoices);
// // recipes appear on page 
// // randomize recipes
// // Movie API key: http://www.omdbapi.com/?i=tt3896198&apikey=a32a6988
// // Made to changes allow program to run

$("#submitMovie").on("click", clickMovies);

function clickMovies(event) {
    event.preventDefault();
    var genre = $("#format-films").val();
    console.log(genre);
    var moviesLink = `https://api.themoviedb.org/3/discover/movie?api_key=${movieKey}&with_genres=${genre}` 
    console.log(moviesLink)
    fetch(moviesLink).then(function(response) {
        return response.json()
    }).then(function(data) {
        console.log(data)
        console.log((data.results[0].title))
        movieChoices((data.results[0].id))
    })};

    function movieChoices(movieId) {
        var moviesLink = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${movieKey}`;
        console.log(moviesLink);
    // from recipe list that is returned - pick one 
    // find on the API site how to search for 1 recipe and use the selected recipe to perform the search 
    // with the data, console log, identify what we want 
    // list the information on the page 
        fetch(moviesLink).then(function(response) {
            return response.json()
        }).then(function(data){ 
           console.log(data);
           let imageUrl = 'https://image.tmdb.org/t/p/w500' + data.poster_path;
            renderMovieResult(imageUrl,data.overview,data.title)
            console.log(data.title)
            console.log(data.image)
            console.log(data.summary)
    })}

// function clickMovies(event) {
//     event.preventDefault()
//     var randomId = Math.floor(1000000 + Math.random() * 900000)
//     // var movies = $("#format-films").val();
//     // console.log(movies)
//     var moviesLink = "http://www.omdbapi.com/?i=tt" + randomId + "&apikey=a32a6988"
//     fetch(moviesLink).then(function(response) {
//         return response.json()
//     }).then(function(data) {
//         console.log(data)
//         // console.log((data.results[0].title))
// })
// };

// function movieChoices() {
//     var moviesLink = "http://www.omdbapi.com/?i=tt3896198&apikey=a32a6988"
//     fetch(moviesLink).then(function(response) {
//         return response.json()
//     }).then(function(data) {
//         console.log(data)
//         // 
    // })}




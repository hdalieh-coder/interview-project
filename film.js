const API_KEY = "dd657ad0";

const searchInput = document.querySelector("#film-search-input");
const searchButton = document.querySelector("#film-search-button");

const movieList = document.querySelector("#movieList");
const loading = document.querySelector("#loading");
const message = document.querySelector("#message");
const searchInfo = document.querySelector("#search-info");

// Get the search term from the URL
const urlParams = new URLSearchParams(window.location.search);
const searchTerm = urlParams.get("search");

// Search automatically when the page opens
if (searchTerm) {


searchInput.value = searchTerm;

fetchMovies(searchTerm);


}

// Search button
searchButton.addEventListener("click", function () {


const search = searchInput.value.trim();

if (search === "") {
    message.textContent = "Please enter a movie title.";
    return;
}

fetchMovies(search);


});

// Press Enter to search
searchInput.addEventListener("keydown", function (event) {


if (event.key === "Enter") {

    const search = searchInput.value.trim();

    if (search === "") {
        return;
    }

    fetchMovies(search);

}


});

// Fetch movies from OMDb
async function fetchMovies(search) {


// Show spinner
loading.style.display = "flex";

// Clear old results
movieList.innerHTML = "";

message.textContent = "";

searchInfo.textContent = "";


const url =
    `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(search)}`;


try {

    const response = await fetch(url);

    const data = await response.json();


    // Check if OMDb found movies
    if (data.Response === "False") {

        loading.style.display = "none";

        message.textContent = "Coming soon...";

        return;

    }


    // Sort movies alphabetically A-Z
    data.Search.sort(function (a, b) {

        return a.Title.localeCompare(b.Title);

    });


    // Display search information
    searchInfo.textContent = ` ${data.totalResults} movies found for "${search}"`;


 // Keep the spinner visible for a little longer
setTimeout(function () {

    // Display movies
    displayMovies(data.Search);

    // Hide spinner
    loading.style.display = "none";

}, 1500);


} catch (error) {

    loading.style.display = "none";

    message.textContent =
        "Something went wrong. Please try again.";

    console.error(error);

}


}

// Display movies
function displayMovies(movies) {


movieList.innerHTML = "";


movies.forEach(function (movie) {

    const movieCard = document.createElement("article");

    movieCard.classList.add("movie-card");


    // Use a placeholder if OMDb doesn't have a poster
    const poster =
        movie.Poster !== "N/A"
            ? movie.Poster
            : "./assets/no-poster.jpg";


    movieCard.innerHTML = `

        <img
            src="${poster}"
            alt="${movie.Title} poster"
            class="movie-poster"
        >

        <div class="movie-info">

            <h2>${movie.Title}</h2>

            <p>
                <strong>Year:</strong> ${movie.Year}
            </p>

            <p>
                <strong>Type:</strong> ${movie.Type}
            </p>

        </div>

    `;


    movieList.appendChild(movieCard);

});


}

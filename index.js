document.addEventListener("DOMContentLoaded", function() {
    const searchBox = document.getElementById("search-box");
    const popcorn = document.getElementById("popcorn");

    searchBox.addEventListener("click", function() {
        popcorn.style.display = "block"; // Show the popcorn
        popcorn.style.animation = "popcornRoll 2s forwards"; // Start the animation
        popcorn.addEventListener("animationend", () => {
            popcorn.style.display = "none"; // Hide the popcorn after animation ends
        });
    });
});

const searchBox = document.querySelector("#search-box");
const searchButton = document.querySelector("#home-search-button");

// Search when the button is clicked
searchButton.addEventListener("click", searchMovie);

// Search when Enter is pressed
searchBox.addEventListener("keydown", function (event) {

if (event.key === "Enter") {
    searchMovie();
}


});

// Send the search to the film page
function searchMovie() {


const searchTerm = searchBox.value.trim();

if (searchTerm === "") {
    return;
}

// Show loading spinner
    searchButton.classList.add("loading");


// Disable the button while searching
    searchButton.disabled = true;

// Wait 1.5 seconds before going to the film page
    setTimeout(function () {

    window.location.href = `film.html?search=${encodeURIComponent(searchTerm)}`;

    }, 1500);
}

const searchBox = document.querySelector("#search-box");
const searchButton = document.querySelector("#home-search-button");
const popcornContainer =
    document.querySelector("#popcorn-container");

function createPopcorn() {

    // Remove any old popcorn
    popcornContainer.innerHTML = "";


    // Create 30 pieces of popcorn
    for (let i = 0; i < 30; i++) {

        const popcorn = document.createElement("div");

        popcorn.classList.add("popcorn-piece");


        // Random starting position across the bottom
        const startPosition =
            Math.random() * 90 + 5;


        // Random horizontal movement
        const x =
            Math.random() * 500 - 250;


        // Random height
        const y =
            -(Math.random() * 400 + 250);


        // Random direction when falling
        const fallX =
            x + (Math.random() * 300 - 150);


        // Random falling distance
        const fallY =
            Math.random() * 250 + 100;


        // Random size
        const size =
            Math.random() * 18 + 12;


        // Random delay
        const delay =
            Math.random() * 500;

        // Random rotation
        const rotation =
            Math.random() * 720 - 360;

        const fallRotation =
            rotation + (Math.random() * 360 - 180);


        // Apply the starting position
        popcorn.style.left =
            `${startPosition}%`;


        // Apply random size
        popcorn.style.width =
            `${size}px`;

        popcorn.style.height =
            `${size}px`;


        // Apply movement values
        popcorn.style.setProperty(
            "--x",
            `${x}px`
        );

        popcorn.style.setProperty(
            "--y",
            `${y}px`
        );

        popcorn.style.setProperty(
            "--fall-x",
            `${fallX}px`
        );

        popcorn.style.setProperty(
            "--fall-y",
            `${fallY}px`
        );

        popcorn.style.setProperty(
            "--rotation",
            `${rotation}deg`
        );

        popcorn.style.setProperty(
            "--fall-rotation",
            `${fallRotation}deg`
       );


        // Apply random delay
        popcorn.style.animationDelay =
            `${delay}ms`;


        popcornContainer.appendChild(popcorn);

    }

}

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

// Start the popcorn animation
    createPopcorn();

// Show loading spinner
    searchButton.classList.add("loading");


// Disable the button while searching
    searchButton.disabled = true;

// Wait 1.5 seconds before going to the film page
    setTimeout(function () {

    window.location.href = `film.html?search=${encodeURIComponent(searchTerm)}`;

    }, 2500);
}

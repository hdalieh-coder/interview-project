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


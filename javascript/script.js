const images = document.querySelectorAll('.slideshow img');
let currentIndex = 0;

document.querySelector('.right-arrow').addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    showImage(currentIndex);
});

document.querySelector('.left-arrow').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = images.length - 1;
    }
    showImage(currentIndex);
});

function showImage(index) {
    images.forEach((img, i) => {
        if (i === index) {
            img.style.opacity = 1;
        } else {
            img.style.opacity = 0;
        }
    });
}
document.querySelector("#default-layout > section.sc-feJyhm.gVaEXQ.footer")

    function search() {
        let input = document.querySelector("input[name='keyword']").value.toLowerCase();
        let moviesAndShows = [
            "Peaky Blinders",
            "House of Dragons",
            "Fallout",
            "Black Narcissus",
            "Percy Jackson",
            "The Witcher",
            "Halo",
            "Furiosa-A-Mad-Max-Saga",
            "Kung Fu Panda"

        ];
        let searchResults = moviesAndShows.filter(item => item.toLowerCase().includes(input));
        displayResults(searchResults);
    }

    function displayResults(results) {
        let container = document.querySelector(".Upcoming-TV-Shows");
        container.innerHTML = ""; // Clear previous results
        results.forEach(item => {
            let imageContainer = document.createElement("div");
            imageContainer.classList.add("image-container");
            let image = document.createElement("img");
            image.src = `images/${item.toLowerCase().replaceAll(" ", "-")}.jpeg`;
            image.alt = item;
            image.classList.add("movie-img");
            imageContainer.appendChild(image);
            container.appendChild(imageContainer);
        });


    }
    document.addEventListener("DOMContentLoaded", function() {
    // Add event listener to the search input field
    const searchInput = document.querySelector("input[name='keyword']");
    searchInput.addEventListener("input", search);
    searchInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            search();
        }
    });
    
    // Function to show movie details when clicking on a poster
    function showMovieDetails(movieName) {
        // Hide all movie details
        const movieDetails = document.querySelectorAll(".movie-details");
        movieDetails.forEach(function(details) {
            details.style.display = "none";
        });
        
        // Show movie details for the clicked movie
        const targetMovie = document.querySelector(`#${movieName}`);
        if (targetMovie) {
            targetMovie.style.display = "block";
        }
    }

    // Add event listeners to each poster to show movie details
    const posters = document.querySelectorAll(".movie-img");
    posters.forEach(function(img) {
        poster.addEventListener("click", function() {
            const movieName = img.alt.replace(/\s+/g, "-").toLowerCase();
            showMovieDetails(movieName);
        });
    });
});


let movieDatabase = [
    {
        title: "Inception",
        director: "Christopher Nolan",
        year: 2010,
        genre: "Sci-Fi",
        rating: 8.8
    },
    {
        title: "The Shawshank Redemption",
        director: "Frank Darabont",
        year: 1994,
        genre: "Drama",
        rating: 9.3
    },
    {
        title: "The Godfather",
        director: "Francis Ford Coppola",
        year: 1972,
        genre: "Crime",
        rating: 9.2
    },
    // Add more movies as needed
];

// Function to display all movies in the database
function displayMovies() {
    movieDatabase.forEach(movie => {
        console.log(`Title: ${movie.title}, Director: ${movie.director}, Year: ${movie.year}, Genre: ${movie.genre}, Rating: ${movie.rating}`);
    });
}

// Function to add a new movie to the database
function addMovie(title, director, year, genre, rating) {
    let newMovie = {
        title: title,
        director: director,
        year: year,
        genre: genre,
        rating: rating
    };
    movieDatabase.push(newMovie);
}

// Function to search for movies by title
function searchByTitle(title) {
    let foundMovies = movieDatabase.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()));
    return foundMovies;
}

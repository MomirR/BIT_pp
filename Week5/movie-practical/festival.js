// Create constructor functions with properties representing the following:
// Genre - name
// Movie - title, genre (instance of Genre), length
// Program - date, list of movies (initially empty) and total number of movies 
// Festival - name, list of programs (initially empty), and number of movies in all programs

// Add method getData to Genre which returns formatted string as first and last letter of genre name
// "Action" -> AN
// "Drama" -> DA
// "Comedy" -> CY

// Add getData method to Movie. It should return a formatted string consisting of the movie title, length and genre acronym.
// The Shawshank Redemption, 130min, AN
// Add addMovie method to Program. It should receive a Movie and add the movie to the movie list of a given program. 
// Add addProgram method to Festival. It should receive a Program and add the program to the list of the given festival’s programs. 

// Add getData method to Program. It should return a formatted string of all data related to the program. 
// The string should contain date, program length (calculated from length of all movies in a list) and data about movies in a list (see the example below). 
// To display movie data, use Movie’s getData method.

// Date, program length from all movies
//      First movie title, length and genre
//      Second movie title, length and genre
//      Third movie title, length and genre
//      Fourth movie name and length and genre



(function () {
    "use strict";
    console.log("Hi");

    function Genre(nameOfGenre) {
        this.genre = nameOfGenre;

        this.getData = function (nameOfGenre) {
            var formattedString = "";
            formattedString += nameOfGenre[0] + nameOfGenre.length - 1;
            formattedString = formattedString.toUpperCase();
            return formattedString;
        }
        // return genre;
    }

    function Movie(title, genre, length) {
        this.titleMovie = title;
        this.genre = new Genre(genre).genre;
        this.lengthMovie = length;

        this.getData = function (title, length, genre) {
            var formattedString = "";
            formattedString += title + ", " + length + ", " + genre;
            return formattedString;
        }
    }

    function Program(date, movie) {
        this.date = date;
        this.listOfMovies = [];
        this.numberOfMovies = this.listOfMovies.length;

        this.addMovie = function (movie) {
            this.listOfMovies.push(movie); //not finished
        }

        this.getData = function () {
            var formattedString = "";
            var movieLength = 0;
            for (i = 0; i < this.listOfMovies.length; i++) {
            movieLength += parseInt(this.listOfMovies.length[i].lengthMovie);
                // formattedString += this.date + " " + this.listOfMovies[i] + " " + this.numberOfMovies; 
            }
            formattedString += this.date + ", " + movieLength + "\n";
            for (i = 0; i < this.listOfMovies.length; i++) {
                formattedString += "\t" + this.listOfMovies[i].titleMovie + ", " + this.listOfMovies[i].lengthMovie + " " + this.listOfMovies[i].genre + "\n";  
            }
            return formattedString;
        }
    }

    function Festival(name) {
        this.name = name;
        this.festivalListOfPrograms = [];
        this.numberOfMovies = new Program(date, movie).numberOfMovies;  //and number of movies in all programs

        this.addProgram = function (program) {
            Festival.festivalListOfPrograms.push(program);
        }

        this.getData = function (name, ) {
            var formattedString = "";
        }
    }
})();
// Add method getData to Festival which return formatted string like festival name, number of movies in all programs and all programs listed. 
// Use Programs getData method to list all programs. (example output is shown below)

// Weekend festival has 4 movie titles
// 	28.10.2017, program duration 368min
// 		Spider-Man: Homecoming, 133min, AN
// 		War for the Planet of the Apes, 140min, DA
// 		The Dark Tower, 95min, WN
// 	29.10.2017, program duration 108min
// 		Deadpool, 108min, CY



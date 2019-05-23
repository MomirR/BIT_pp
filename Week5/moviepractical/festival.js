// Create constructor functions with properties representing the following:
// Genre - name
// Movie - title, genre (instance of Genre), length
// Program - date, list of movies (initially empty) and total number of movies 
// Festival - name, list of programs (initially empty), and number of movies in all programs

(function () {
    "use strict";
    console.log("Hi");

    function Genre(name) {
        this.genre = name;
        return genre;
    }

    function Movie(title, name, length) {
        this.titleMovie = title;
        this.genre = new Genre(name);
        this.lengthMovie = length;
    }

    function Program(date) {
        this.date = date;
        this.listOfMovies = [];
        this.numberOfMovies = new Movie(title, name, length).lengthMovie;
    }

    function Festival(name) {
        this.name = name;
        this.listOfPrograms = [];
        // this.numberOfMovies = new Movie(title, name, length).lengthMovie;
    }




})();




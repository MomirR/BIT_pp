

// Inside your immediately-invoking function, add createMovie function that receives a movie title, movie length and genre (as a string) as parameters and returns a created Movie.

// Inside your immediately-invoking function, add createProgram function that receives a date and returns a created Program.

// Start creating your movie festival.

// In your main program function, create an instance of the Festival object. 

// Create two instances of Program using createProgram function.

// Create four instances of Movie object using createMovie function. Add all created movies to both programs using the addMovie method.

// Add the created program instances to the created festival instance using festival’s addProgram method.

// Display festival’s data using getData method.

// Hints
// List is a synonym for array, so when we say a list of movies, it’s actually an array of movie objects
// Use JS built-in Date()object to create Date object
// Use \t and \n special strings to format output 
// Use built-in String methods to transform text from lowercase to uppercase
// Use Array’s built-in methods to add and remove elements from an array



(function () {
    "use strict";
    console.log("Hi");

    function Genre(nameOfGenre) {
        this.genre = nameOfGenre;

        this.getData = function () {
            var formattedString = "";
            formattedString += this.genre[0] + this.genre[this.genre.length - 1];
            formattedString = formattedString.toUpperCase();
            return formattedString;
        }
        // return genre;
    }

    function Movie(title, genre, length) {
        this.titleMovie = title;
        this.genre = new Genre(genre).getData();
        this.lengthMovie = length;

        this.getData = function (title, length, genre) {
            var formattedString = "";
            formattedString += title + ", " + length + ", " + this.genre;
            return formattedString;
        }
    }

    function Program(date) {
        this.date = new Date(date);
        this.listOfMovies = [];
        this.numberOfMovies = this.listOfMovies.length;

        this.addMovie = function (movie) {
            this.listOfMovies.push(movie); //not finished
        }

        this.getData = function () {
            var formattedString = "";
            var movieLength = 0;
            for (var i = 0; i < this.listOfMovies.length; i++) {
                movieLength += parseInt(this.listOfMovies[i].lengthMovie);
            }
            formattedString += this.date.getFullYear() + ", " + movieLength + "\n";
            for (var i = 0; i < this.listOfMovies.length; i++) {
                formattedString += "\t" + this.listOfMovies[i].titleMovie + ", " + this.listOfMovies[i].lengthMovie + " " + this.listOfMovies[i].genre + "\n";
            }
            return formattedString;
        }
    }

    function Festival(name) {
        this.name = name;
        this.festivalListOfPrograms = [];

        this.addProgram = function (name) {
            this.festivalListOfPrograms.push(name);
        }

        this.getData = function () {
            var formattedString = "";
            var numberOfMoviesLength;
            for (var i = 0; i < this.festivalListOfPrograms; i++) {
                numberOfMoviesLength += this.festivalListOfPrograms[i].listOfMovies.length + " ";
                formattedString += this.festivalListOfPrograms[i].getData();
            }

            return this.name + " has " + this.numberOfMovies() + " movie titles \n" + formattedString;
        }

        this.numberOfMovies = function () {
            var sum = 0;
            for (var i = 0; i < this.festivalListOfPrograms.length; i++) {
                sum += this.festivalListOfPrograms[i].listOfMovies.length
            }
            return sum;
        }
    }

    var terminator2 = new Movie("Terminator 2", "Action", "120min.");
    var shutterIsland = new Movie("Shutter Island", "Thriller", "139min.");
    var vanillaSky = new Movie("Vanilla Sky", "Fantasy", "137min.");
    var piratesOfTheCaribbean = new Movie("Pirates Of The Caribbean", "Action", "132min.");
    // console.log(piratesOfTheCaribbean);
    var firstDay = new Program("12 18 2019.");
    // console.log(firstDay);
    var cannesFestival = new Festival("Cannes Festival");
    var secondDay = new Program("12 19 2019.");
    var thirdDay = new Program("12 20 2019.");

    //creating 4 movies
    var rocky = new Movie("Rocky", "Action", "128min.");
    var dieHard = new Movie("Die Hard", "Action", "114min.");
    var lordOfTHeRings = new Movie("Lord Of THe Rings", "Fantasy", "180min.");
    var harryPotter = new Movie("Harry Potter", "Fantasy", "131min.");

    //adding films to programs
    firstDay.addMovie(terminator2);
    firstDay.addMovie(shutterIsland);
    firstDay.addMovie(vanillaSky);

    secondDay.addMovie(piratesOfTheCaribbean);
    secondDay.addMovie(rocky);

    thirdDay.addMovie(dieHard);
    thirdDay.addMovie(lordOfTHeRings);
    thirdDay.addMovie(harryPotter);

    //adding programs to festival
    cannesFestival.addProgram(firstDay);
    cannesFestival.addProgram(secondDay);
    cannesFestival.addProgram(thirdDay);

    // Display festival’s data using getData method.
    console.log(cannesFestival.getData());
    console.log(firstDay.getData());


})();

// Hints
// List is a synonym for array, so when we say a list of movies, it’s actually an array of movie objects
// Use JS built-in Date()object to create Date object
// Use \t and \n special strings to format output 
// Use built-in String methods to transform text from lowercase to uppercase
// Use Array’s built-in methods to add and remove elements from an array

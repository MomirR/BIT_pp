(function () {
    "use strict";

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

        if (!typeof length === "number") {
            console.log("Enter number");
        } else {
            this.lengthMovie = length;

        };

        // Handle error when you enter text instead of a number for movie length. Try to stop program execution when this type of error happens.


        this.getData = function (title, length, genre) {
            var formattedString = "";
            formattedString += title + ", " + length + ", " + this.genre;
            return formattedString;
        }
    }

    function Program(date) {
        this.date = date;
        this.listOfMovies = [];
        this.numberOfMovies = this.listOfMovies.length;

        // When adding a movie to the movie list, make sure that there are no more than 4 movies of the same genre. Also, length of all movies in a list can not be longer than 8 hours.
        this.addMovie = function (movie) {
            if (this.movieLength() >= 480) {
                console.log("Movies are more then 480min.");
                return
            }
            var count = 1;
            for (var i = 0; i < this.listOfMovies.length; i++) {
                if (this.listOfMovies[i].genre === movie.genre) {
                    count++;
                }
            }
            if (count === 4) {
                console.log("You can't have 4 movies of the same genre");
                return
            }

            this.listOfMovies.push(movie);
        }

        this.movieLength = function () {
            var movieLength = 0;
            for (var i = 0; i < this.listOfMovies.length; i++) {
                movieLength += parseInt(this.listOfMovies[i].lengthMovie);
            }
            return movieLength;
        }

        this.getData = function () {
            var formattedString = "";
            var movieLength = this.movieLength();
            formattedString += this.date + ", program duration " + movieLength + "min." + "\n";
            for (var i = 0; i < this.listOfMovies.length; i++) {
                formattedString += "\t" + this.listOfMovies[i].titleMovie + ", " + this.listOfMovies[i].lengthMovie + " " + this.listOfMovies[i].genre + "\n";
            }
            return formattedString;
        }
    }
    // Modify the festival so that it accepts maximum number of movies. Handle the error if text is inserted instead of a number for maximum number of movies. 
    // If there are no programs added to the festival, instead of program data display a message informing the user that the program is yet to be announced.

    function Festival(name) {
        this.name = name;
        this.festivalListOfPrograms = [];

        this.IsThereProgram = function () {
            if (this.festivalListOfPrograms.length === 0) {
                return console.log("Program will be announced soon");
            }
        }

        this.addProgram = function (name) {
            if (!typeof name === "number") {
                return console.log("Input must be a number");

            }

            var max = 0;
            var msg = "You cant enter more then 10 movies";
            if (max === 10) {
                return console.log(msg);

            }
            this.festivalListOfPrograms.push(name);
            max++;
        }

        this.getData = function () {
            var formattedString = "";
            var numberOfMoviesLength;
            for (var i = 0; i < this.festivalListOfPrograms; i++) {
                numberOfMoviesLength += this.festivalListOfPrograms[i].listOfMovies.length + " ";
                formattedString += this.festivalListOfPrograms[i].getData();
            }

            return this.name + " has " + this.numberOfMovies() + " movie titles" + formattedString;
        }

        this.numberOfMovies = function () {
            var sum = 0;
            for (var i = 0; i < this.festivalListOfPrograms.length; i++) {
                sum += this.festivalListOfPrograms[i].listOfMovies.length
            }
            return sum;
        }
    }

    //creating movies
    var terminator2 = new Movie("Terminator 2", "Action", "120min.");
    var shutterIsland = new Movie("Shutter Island", "Action", "139min.");
    var vanillaSky = new Movie("Vanilla Sky", "Action", "137min.");
    var vanillaSky2 = new Movie("Vanilla Sky", "Action", "137min.");


    var piratesOfTheCaribbean = new Movie("Pirates Of The Caribbean", "Action", "132min.");
    var rocky = new Movie("Rocky", "Action", "128min.");

    var dieHard = new Movie("Die Hard", "Action", "114min.");
    var lordOfTHeRings = new Movie("Lord Of THe Rings", "Fantasy", "180min.");
    var harryPotter = new Movie("Harry Potter", "Fantasy", "131min.");

    var firstDay = new Program("12.18.2019");
    // console.log(firstDay);
    var cannesFestival = new Festival("Cannes Festival");
    var secondDay = new Program("12.19.2019");
    var thirdDay = new Program("12.20.2019");


    //adding films to programs
    firstDay.addMovie(terminator2);
    firstDay.addMovie(shutterIsland);
    firstDay.addMovie(vanillaSky);
    firstDay.addMovie(vanillaSky2); //Ne prolazi validaciju zbog istog zanra :)

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
    console.log(secondDay.getData());
    console.log(thirdDay.getData());
})();

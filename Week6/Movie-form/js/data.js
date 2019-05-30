var dataController = (function () {

    var data = {
        movies: [],
        totalMoviesLength: 0
    }

    //create movie
    class Movie {
        constructor(name, duration, genre) {
            this.name = name;
            this.duration = duration;
            this.genre = genre;
        }
        formatedString() {
            var string = "";
            var up = this.genre.toUpperCase();
            string += up[0];
            string += up[up.length - 1];

            return string;
        }
        getData() {
            return this.name + ",  " + "  duration: " + this.duration + ",  " + "  genre: " + this.formatedString();
        }
    }
    //creating movie
    function creatingMovie(name, duration, genre) {
        return new Movie(name, duration, genre);
    }

    //save movie to array
    function saveMovieToArray(movie) {
        if (movie instanceof Movie) {
            data.movies.push(movie);
        }
    }

    //calculate movies length
    function calculateMoviesLength() {
        var total = 0
        for (var i = 0; i < data.movies.length; i++) {
            total += data.movies[i].duration;
        }
        data.totalMoviesLength = total;
    }

    return {
        calculateMoviesLength: calculateMoviesLength,
        saveMovieToArray: saveMovieToArray,
        creatingMovie: creatingMovie,
        data: data
    }
})();
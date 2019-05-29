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
        return this.name + " ,  " + this.duration + " ,  " + this.formatedString();
    }
}




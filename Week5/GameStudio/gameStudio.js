function Game(gameName, genre, recommender) {
    this.name = gameName;
    this.genre = genre;
    this.recommenderAge = recommender;

    this.getInfo = function () {
        var list = "";
        list += this.name + " " + this.genre + " " + this.recommenderAge;
        return list;
    }
}

function GameStudio(name, address) {
    this.name = name;
    this.address = address;
    this.employees = [];
    this.games = [];

    this.hireEmployees = function (employee) {
        this.employees.push(employee);
    }

    this.makeGame = function (gameName, genre, recommender) {
        var newGame = new Game(gameName, genre, recommender);
        this.games.push(newGame);
    }

    this.listAllEmployees = function () {
        var list = "";
        for (i = 0; i < this.employees.length; i++) {
            list += this.employees[i].getInfo() + "\n";
        }
        return console.log(list);
    }

    this.listAllGames = function () {
        var list = "";
        for (i = 0; i < this.games.length; i++) {
            list += this.games[i].getInfo() + "\n";
        }
        return console.log(list);
    }
}

function Employee(name, age, position) {
    this.name = name;
    this.age = age;
    this.position = position;

    this.getInfo = function () {
        var list = "";
        list += this.name + " " + this.age + " " + this.position;
        return list;
    }
}

//Kreirali radnike
var pera = new Employee("Pera", 18, "Test Developer")
var momo = new Employee("Momo", 50, "Senior Game Designer")
var mimi = new Employee("Mimi", 28, "CEO")

//Kreirali studio
var blizzardEntertainment = new GameStudio("BlizzardEntertainment", "California");

//Ubacivanje svih radnika u niz
blizzardEntertainment.hireEmployees(pera);
blizzardEntertainment.hireEmployees(momo);
blizzardEntertainment.hireEmployees(mimi);

//Izlistavanje radnika
blizzardEntertainment.listAllEmployees();

//Kreiranje igre
blizzardEntertainment.makeGame("Warcraft3", "Strategy", "18+");
blizzardEntertainment.makeGame("Heroes of the Storm", "Moba", "18+");
blizzardEntertainment.makeGame("Overwatch", "FPS", "18+");

blizzardEntertainment.listAllGames();


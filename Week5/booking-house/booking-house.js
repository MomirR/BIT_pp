(function () {
    "use strict";

    //Constructor of a Country
    function Country(countryName, continent) {
        this.countryName = countryName;
        this.odds = 2;
        this.continent = continent;
    }


    //Constructor of a Person
    function Person(name, surname, dateOfBirth) {
        this.name = name;
        this.surname = surname;
        this.dateOfBirth = dateOfBirth;

        this.formattedString = function () {
            var string = "";
            string += this.name + " " + this.surname + " " + this.dateOfBirth;
            return string;  //(date of birth in dd.mm.yy format)
        }
    }


    //Constructor of a Player
    function Player(name, surname, dateOfBirth, betAmount, countryName, continent) {
        this.person = new Person(name, surname, dateOfBirth);
        this.betAmount = betAmount;
        this.country = new Country(countryName, continent);

        this.formattedString = function () {
            var string = "";
            string += this.country.countryName + ", " + (this.betAmount * this.country.odds) + " eur, " + this.person.formattedString();
            return string;
        }
    }


    //Constructor of a Address
    function Address(city, postalCode, streetAndNumber, country) {
        this.country = country;
        this.city = city;
        this.postalCode = postalCode;
        this.streetAndNumber = streetAndNumber;

        this.formattedString = function () {
            var string = "";
            string += this.streetAndNumber + ", " + this.postalCode + " " + this.city + " " + this.country;
            return string;
        }
    }


    //Constructor of a Betting Place
    function BettingPlace(city, postalCode, streetAndNumber, country) {
        this.address = new Address(city, postalCode, streetAndNumber, country);
        this.listOfPlayers = [];

        this.formattedString = function () {
            var string = "";
            string += this.address.streetAndNumber + ", " + this.address.postalCode + " " + this.address.city + ", sum of all bets: " + this.betAmount() + "eur";
            return string;
        }

        //Adding players to a Betting Place
        this.addPlayer = function (player) {
            this.listOfPlayers.push(player);
        }

        //Sum is Bet amount * odd of all players
        this.betAmount = function () {
            var sum = 0;
            for (var i = 0; i < this.listOfPlayers.length; i++) {
                sum += this.listOfPlayers[i].betAmount * this.listOfPlayers[i].country.odds;
            }
            return sum;
        }
    }


    //Constructor of a Betting House
    function BettingHouse(competitionName) {
        this.competition = competitionName;
        this.listOfBettingPlaces = [];

        this.numberOfPlayers = function () {
            var sum = 0;
            for (var i = 0; i < this.listOfBettingPlaces.length; i++) {
                sum += this.listOfBettingPlaces[i].listOfPlayers.length;
            }
            return sum;
        };
    }


    //Continents as constants
    var continent = {
        europe: "EU",
        asia: "AS",
        africa: "AF",
        southAmerica: "SA",
        northAmerica: "NA",
        australia: "AU"
    };
    //Locking the Continent object
    // continent.freeze(continent);

    //Function create Player
    function createPlayer(name, surname, dateOfBirth, betAmount, countryName, continent) {
        var newPlayer = new Player(name, surname, dateOfBirth, betAmount, countryName, continent);
        return newPlayer;
    }
    // Inside your immediately-invoking function, add a function that creates a BettingPlace.

    function createBettingPlace(city, postalCode, streetAndNumber, country) {
        var newBettingPlace = new BettingPlace(city, postalCode, streetAndNumber, country);
        return newBettingPlace;
    }

    /**************************** LETS START ****************************/

    //Creating BettingHouse
    var tournamentName = new BettingHouse("Call of the Hrkljuš");

    //Creating players
    var player1 = createPlayer("Srećko", "Radosavljević", "11.04.1987", 1200, "SR", continent.europe);
    var player2 = createPlayer("Stefan", "Cvetinčanin", "11.23.1987", 350, "GR", continent.europe);
    var player3 = createPlayer("Nikola", "Pantić", "11.25.1985", 1600, "SR", continent.europe);
    var player4 = createPlayer("Nikola", "Jovanović", "01.26.1990", 2200, "SR", continent.europe);
    var player5 = createPlayer("Baki", "Kabadahija", "10.27.1994", 800, "RU", continent.europe);
    var player6 = createPlayer("Stefan", "Lazić", "07.29.1985", 400, "RU", continent.europe);

    //Creating Betting Place
    var bettingPlace1 = createBettingPlace("Belgrade", 11000, "Vidikovački Venac 56", "Serbia");
    var bettingPlace2 = createBettingPlace("Novi Sad", 27000, "Pariske Komune 25", "Serbia");

    //Add created Players to Betting places
    bettingPlace1.addPlayer(player1);
    bettingPlace1.addPlayer(player2);
    bettingPlace1.addPlayer(player3);
    bettingPlace2.addPlayer(player4);
    bettingPlace2.addPlayer(player5);
    bettingPlace2.addPlayer(player6);

    //Add Betting Places to the Betting House
    tournamentName.listOfBettingPlaces.push(bettingPlace1);
    tournamentName.listOfBettingPlaces.push(bettingPlace2);

    // Displaying all betting house data:

    console.log(tournamentName.competition + ", " + tournamentName.listOfBettingPlaces.length + " betting places, " + tournamentName.numberOfPlayers() + " bets \n" + bettingPlace1.formattedString() + "\n" + "\t" + player1.formattedString() + "\n \t" + player2.formattedString() + "\n \t" + player3.formattedString() + "\n" + bettingPlace2.formattedString() + "\n \t" + player4.formattedString() + "\n \t" + player5.formattedString() + "\n \t" + player6.formattedString() + "\n" + "There are 3 bets on Serbia");


})();

// Football World Cup Winner, 2 betting places, 4 bets
// Nemanjina, 11000 Belgrade, sum of all bets: 2100eur
// 		SR, 1050.00 eur, Pera Peric, 29 years
// 		SR, 1050.00 eur, Pera Peric, 29 years
// Nemanjina, 11000 Belgrade, sum of all bets: 2100eur
// 		GR, 1050.00 eur, Pera Peric, 29 years
// 		SR, 1050.00 eur, Pera Peric, 29 years
// There are 3 bets on Serbia

/********************************** MAIN APP STARTS******************************************/

//Constructor for Application
function App(name, licence, stars) {
    this.name = name;
    this.licence = licence;
    this.stars = stars;
}

//adding methods to main app
App.prototype.isCCLicence = function (licence) {
    var lic = licence.toLowerCase();
    if (lic === "cc" || lic === "creative commons") {
        return "He has licence";;
    } else {
        return "He has no licence";
    }
}

App.prototype.like = function (numberOfLikes) {
    var numOfStars = parseInt(numberOfLikes);
    this.stars = numOfStars;
}

App.prototype.showStars = function () {
    return this.stars;
}

App.prototype.getDataWeb = function () {
    var string = "";
    string += this.name + "\n" + this.url + "\n" + this.technologies + "\n" + this.licence + "\n" + this.stars;
    return string;
}

App.prototype.getDataMob = function () {
    var string = "";
    string += this.name + "\n" + this.platforms + "\n" + this.licence + "\n" + this.stars;
    return string;
}
/********************************** WEB APP STARTS******************************************/

//Constructor fun WebApp
function WebApp(url, technologies, name, licence, stars) {
    App.call(this, name, licence, stars);
    this.url = url;
    this.technologies = technologies;
}
//Inherit methods from App
WebApp.prototype = Object.create(App.prototype);
WebApp.prototype.constructor = WebApp;

//adding methods to WebApp

WebApp.prototype.reactBased = function () {
    var tech = this.technologies.toLowerCase();
    var string = "";
    if (tech === "react") {
        string = "Its in React";
    } else {
        string = "Its not written in React";
    }
    return string;
}

/********************************** MOBILE APP STARTS******************************************/

//Constructor fun mobile app
function MobileApp(platforms, name, licence, stars) {
    App.call(this, name, licence, stars);
    this.platforms = platforms;
}
//Inherit methods from App
MobileApp.prototype = Object.create(App.prototype);
MobileApp.prototype.constructor = MobileApp;

//adding methods to mobile app


MobileApp.prototype.forAndroid = function () {
    var tech = this.platforms.toLowerCase();
    var string = "";
    if (tech === "android") {
        string = "Its in Android";
    } else {
        string = "Its not written in Android";
    }
    return string;
}

/*********** TESTING *********/

var mladja = new App("VipParties", "CC", 0);
var mladja2 = new WebApp("https://www.foxtv.rs/emisije/foxlife/mladja", "React", "VipParties", "It has", 0);
var mladja3 = new MobileApp("Android", "VipParties", "it has", 0);
var met1 = mladja.isCCLicence("Creative Commons");
var met2 = mladja.like("3");
var met3 = mladja.showStars();
var met4 = mladja2.getDataWeb();
var met5 = mladja2.reactBased();
var met6 = mladja3.forAndroid();
console.log(met6);

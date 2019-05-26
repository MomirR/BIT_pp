(function () {
    "use strict";

    //Main Constructor
    function Main() {
        this.product = new Product();
        this.ShoppingBag = new ShoppingBag();
    }

    //Creating Product
    function Product(name, price, date) {
        this.productId = Math.floor(Math.random() * 100000);
        this.name = name;
        this.price = price;
        this.expirationDate = new Date(date);

        this.getInfo = function () {
            var string = "";
            //the first and last letter of the name together with the product id, name and price. "Banana" -> BA32784, Banana, 129.31
            string += this.name[0].toUpperCase() + this.name[1].toUpperCase() + this.productId + ", " + this.name + ", " + this.price;
            return string;
        }
    }

    //Creating Shopping Bag - no input parameter
    function ShoppingBag() {
        this.listOfProducts = [];

        // Add addProduct method to ShoppingBag. It should receive a Product and add it to the product list. You can add a product to the list only if it has a valid expiration date.  
        this.addProduct = function () {
            if (new Product().expirationDate > new Date("05, 26, 2019")) {
                this.listOfProducts.push();
            } else {
                return console.log("expiration date is not valid");
            }
        }

        //Calculates the average product price 
        this.calculatesTheAverage = function () {
            var sum = 0;
            for (var i = 0; i < this.listOfProducts.length; i++) {
                sum += this.listOfProducts[i].price;
            }
            console.log(sum / this.listOfProducts.length.toFixed(3));
        }

        // Add getMostExpensive method that finds the most expensive product and prints out its info.
        this.mostExpensive = function () {
            var max = this.listOfProducts[0].price;
            for (var i = 0; i < this.listOfProducts.length; i++) {
                if (this.listOfProducts[i].price > max) {
                    max = this.listOfProducts[i].price;
                }
            }
            return max;
        }

        //Calculating total sum
        this.calculateTotalPrice = function () {
            var sum = 0;
            for (var i = 0; i < this.listOfProducts.length; i++) {
                sum += this.listOfProducts[i].price;
            }
            return sum.toFixed(3);
        }

        //PaymentCard
        function PaymentCard(balance, status, date) {
            this.accountBalance = balance.toFixed(2);
            this.status = status; //active or inactive status
            this.validDate = new Date(date);
        }
    }

    new Main();
    var lubenica = new Product("lubenica", 55.50, "06, 30, 2019");
    var krastavac = new Product("krastavac", 60.20, "05, 30, 2019");
    var paradajz = new Product("paradajz", 250.05, "05, 20, 2019");
    var krompir = new Product("krompir", 39.99, "03, 18, 2019");

    var shoppingBag = new ShoppingBag();

    shoppingBag.addProduct(lubenica);
    shoppingBag.addProduct(krastavac);
    shoppingBag.addProduct(paradajz);
    shoppingBag.addProduct(krompir);

    var payCard = new PaymentCard(1025.12, "active", "June 2022")

    function checkoutAndByu(bag, card) {
        var bag = bag.calculateTotalPrice();
        var card = card.accountBalance;

        if (bag <= card) {
            console.log("Purchase is successful");
        } else {
            var moneyMissing = bag - card;
            console.log("You miss " + moneyMissing + " to complete the purchase.");
        }
    }

    console.log(shoppingBag);

})();
// Create checkoutAndBuy function which receives shopping bag and payment card and prints if the purchase is successful or not.
// Purchase is successful only if the amount on the card is greater or equal to the total price of products in the shopping bag. 
// If there is not enough money, print out the amount that is missing to complete the purchase.

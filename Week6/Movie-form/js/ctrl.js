var mainController = (function (ui, dataCtrl) {
    //path
    var $mainButton = document.querySelector("#button");



    //validate data
    function validateData(newMovie) {
        var dataObj = ui.collectData();

        if (!dataObj.title || !dataObj.length || !dataObj.genre || dataObj.length < 0) {
            ui.displayError("Doslo je do greske. Molimo vas popunite sva polja!");
        } else {
            //formating
            var formatedRes = dataCtrl.newMovie.getData();

            //created element, textContent, appended
            ui.displayMovies(formatedRes);

            //reset form
            ui.resetForm();

            //printing length of all movies
            ui.displayingMoviesLength(dataCtrl.calculateMoviesLength());

        }
    }

    $mainButton.addEventListener("click", function mainFunction(e) {
        e.preventDefault();

        var newMovie = new Movie(titleValue, lengthValue, dropValue);

        mainController.validateData(newMovie);
    });

    return mainFunction()

})(UIController, dataController);

mainController.mainFunction();




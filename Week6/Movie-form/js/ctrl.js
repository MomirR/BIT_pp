var mainController = (function (ui, dataCtrl) {
    //path
    var $mainButton = document.querySelector("#button");

    //Event
    $mainButton.addEventListener("click", function (e) {
        e.preventDefault();

        // var newMovie = new Movie(titleValue, lengthValue, dropValue);
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
    });

})(UIController, dataController);





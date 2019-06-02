var UIController = (function () {
    //path
    var $titleInput = document.querySelector("#title");
    var $lengthInput = document.querySelector("#length");
    var $dropInput = document.querySelector("#drop-down");
    var $errorPar = document.querySelector("#error");
    var $totalLength = document.querySelector('#total-length');
    var $printingPar = document.querySelector("#printing");

    //collect Form Data
    function collectData() {
        var titleValue = $titleInput.value.trim();
        var lengthValue = parseInt($lengthInput.value.trim());
        var genreValue = $dropInput.value.trim();

        return {
            title: titleValue,
            length: lengthValue,
            genre: genreValue,
        }
    }

    //display error
    function displayError(msg) {
        $errorPar.textContent = msg;
    }

    //display movies length
    function displayingMoviesLength(movieLength) {
        $totalLength.textContent = "All movies length:" + movieLength;
    }

    //reset form
    function resetForm() {
        $errorPar.textContent = "";
        $titleInput.value = "";
        $lengthInput.value = "";
        $dropInput.value = "";
    }

    //display movies     -- greska -- mozda :D   brisati element pre ubacivanja novog filma node.innerHTML = movie
    function displayMovies(formatedRes) {
        var newEle = document.createElement("p");
        newEle.textContent = formatedRes;
        $printingPar.appendChild(newEle);
    }

    return {
        displayMovies: displayMovies,
        resetForm: resetForm,
        displayingMoviesLength: displayingMoviesLength,
        displayError: displayError,
        collectData: collectData
    };
})();

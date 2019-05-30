//Path
var $titleInput = document.querySelector("#title");
var $lengthInput = document.querySelector("#length");
var $dropInput = document.querySelector("#drop-down");
var $mainButton = document.querySelector("#button");
var $errorPar = document.querySelector("#error");
var $printingPar = document.querySelector("#printing");
var $totalLength = document.querySelector('#total-length');

var totalLength = 0;

function mainFunction(e) {
    e.preventDefault();
    var titleValue = $titleInput.value.trim();
    var lengthValue = parseInt($lengthInput.value.trim());
    var dropValue = $dropInput.value.trim();

    var firstMovie = new Movie(titleValue, lengthValue, dropValue);
    var finalRes = firstMovie.getData();

    if (!titleValue || !lengthValue || !dropValue || lengthValue < 0) {
        $errorPar.textContent = "Doslo je do greske. Molimo vas popunite sva polja!";
    }

    else {
        // printingPar.innerHTML = "<p id='printing'>" + finalRes + "</p>";
        var newEle = document.createElement("p");
        newEle.textContent = finalRes;
        $printingPar.appendChild(newEle);
        $errorPar.textContent = "";
        $titleInput.value = "";
        $lengthInput.value = "";
        $dropInput.value = "";
        totalLength += lengthValue;
        $totalLength.textContent = "All movies length:" + totalLength;

    }
}

$mainButton.addEventListener("click", mainFunction);
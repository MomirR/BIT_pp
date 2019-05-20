function createComputerProgram(d, pl, gr, bs) {
    return {
        description: d,
        programmingLanguage: pl,
        gitRepository: gr,
        booleanStatus: bs,
        printRepository: function () {
            return this.gitRepository;
        },
        isJavaScript: function () {
            if (this.programmingLanguage === "JS") {
                return true;
            } else {
                return false;
            };
        },
        printStatus: function () {
            if (this.booleanStatus === 'true') {
                return "The programme is completed";
            } else {
                return "The programme is not completed";
            }
        }
    };
};

var microsoftProgram = createComputerProgram('Operativni sistem Windows 7', 'C sharp', 'url', 'true');

var iosProgram = createComputerProgram('Operativni sistem IOS', 'JS', 'url', 'false');

var linuxProgram = createComputerProgram('OPerativni sistem Ubuntu', 'C++', 'url', 'true');

console.log(microsoftProgram.printRepository());
console.log(iosProgram.isJavaScript());
console.log(linuxProgram.printStatus());
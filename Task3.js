let theResult = []

function number(int) {

    let result = null;
    for (let i = 1; i <= int; i++) {

        if (i % 2 == 0 && i % 3 == 0 && i % 5 == 0) {
            result = "yu-gi-oh";
        } else if (i % 2 == 0 && i % 3 == 0) {
            result = "yu-gi";
        } else if (i % 2 == 0 && i % 5 == 0) {
            result = "yu-oh";
        } else if (i % 3 == 0 && i % 5 == 0) {
            result = "gi-oh";
        } else if (i % 2 == 0) {
            result = "yu"
        } else if (i % 3 == 0) {
            result = "gi"
        } else if (i % 5 == 0) {
            result = "oh";
        } else {
            result = i;
        }

        theResult.push(result);

    }

    return theResult;
};


console.log(number(100))
console.log(number(10));
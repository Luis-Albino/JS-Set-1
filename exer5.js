function counter (str) {
    try {
        if (!(typeof str === "string") && !(typeof str === "number"))
        throw "Invalid input. String/number rquired";
    }
    catch (err) {
        console.log(err)
        return
    };

    let counter;

    if (typeof str === "string") {
        let vowels = str.match(/[aeiou]/gi);
        if (vowels) {
            counter = vowels.length;
            return counter
        }
        else if (Number(str) != 0 && !Number(str)) {
            counter = 0;
            return counter
        }
    }
    else {
        str = String(str);
    };

    counter = Math.ceil(Math.log10(str));
    if (counter < str.length) {
        counter = str.length;
    };
    
    return counter
};

console.log(counter("Hello World")); // EXPECTED: 3
console.log(counter("bcdfghjklmnpqrstvwxyz")); // EXPECTED: 0
console.log(counter("1255")); // EXPECTED: 4
console.log(counter("000")); // EXPECTED: 3
console.log(counter(000)); // EXPECTED: 1
console.log(counter(123)); // EXPECTED: 3
counter(null); // EXPECTED: Invalid input. String/number rquired
Array.prototype.sortBy = function (sort,order) {
    try {
        if (sort != "length" && sort != "consonant" && sort != undefined && sort != "descending")
        throw "Invalid sorting type"
        if (order != "descending" && order != undefined)
        throw "Invalid ordering type"
    }
    catch (err) {
        console.log(err);
        return
    }

    // Default values //
    // If sort = undefined -> sorting will be lexicographic
    // If order = undefined -> ordering will be ascending

    // Sorting //
    if (sort === "descending") {
        order = "descending" 
    }

    if (sort === "length") {
        this.sort(function (a,b) {
            a = a.length;
            b = b.length;
            return a-b
        });
    }
    else if (sort === "consonant") {
        this.sort(function (a,b) {
            let regex = /[aeiou]/gi;
            let listA = a.match(regex);
            let listB = b.match(regex);
            a = listA?listA.length:0;
            b = listB?listB.length:0;
            return a-b
        });
    }
    else {
        this.sort(); // Default
    }

    // Ordering //
    if (order === "descending") {
        this.reverse();
    }

};

const wordArray = ["part","step","picture","quote","update","answer","speed","assist","survive","circulate"];

wordArray.sortBy("length");
console.log(wordArray)
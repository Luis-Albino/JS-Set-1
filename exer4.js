function copyProp (objA,objB,propertyArray) {
    if (!!propertyArray) {
        for (let property in propertyArray) {
            objA[propertyArray[property]] = objB[propertyArray[property]];
        }
    }
    else {
        for (let property in objB) {
            objA[property] = objB[property];
        }
    }
};

var objA = {};
var objB = {
    "a":0,
    "b":1,
    "c":2
};

console.log("Before: objA=",objA);

copyProp(objA,objB,["a","c"]);

console.log("After: objA=",objA);
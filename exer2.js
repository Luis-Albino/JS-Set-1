function limitFunc (fn,num) {
    let remainingExecutions = num;
    return function () {
        if (remainingExecutions > 0) {
            remainingExecutions--;
            return fn.apply("",arguments)
        }
    }
};


/////////////////////////
/////// Example 1 ///////
/////////////////////////

function talk () {
    console.log("Hi");
}

var limitedTalk = limitFunc(talk,2);

limitedTalk();
limitedTalk();
limitedTalk(); // This one won't be executed


/////////////////////////
/////// Example 2 ///////
/////////////////////////

const sum = (a,b) => a+b;

var limitedSum = limitFunc(sum,1);
console.log(limitedSum(2,3));
console.log(limitedSum(2,3));  // This one won't be executed
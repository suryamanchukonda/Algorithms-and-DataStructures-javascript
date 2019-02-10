// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    var revInt = n;
    //If we do not store the apllied methods back to revInt variable then parseInt in the return statement will just take the argument of the function
    revInt = revInt.toString().split('').reverse().join('')
    //If the arguments passed are negative numbers than the reverse integer will become positive while parsing the string back to integer. Here Math.sign() is used to keep the negative number as it is.
    return parseInt(revInt)*Math.sign(n);
};

//Checking if the code works..
console.log(reverseInt(-53));

module.exports = reverseInt;



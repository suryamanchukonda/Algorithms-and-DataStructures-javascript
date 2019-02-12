// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"



function maxChar(str) {
    var max = 0;
    var charMax = '';
    var charMap = {};
    for(let char of str){
        if(charMap[char]){
            charMap[char]++;
        }
        else{
            charMap[char] = 1;
        }
    }
    for(let char in charMap){
        if(charMap[char]>max && char !== ' '){
            max = charMap[char]
            charMax = char;
        }
    }
    return charMax;
}

console.log(maxChar("Hey, how are you doing?"));

module.exports = maxChar;

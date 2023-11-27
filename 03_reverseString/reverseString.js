const reverseString = function(word) {
    wordSplit = word.split("");
    reversedString = "";
    console.log(wordSplit);
    for (let i = 1; i <= wordSplit.length; i++){
        reversedString += wordSplit[wordSplit.length - i];
    }
    // return reversedString;
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;

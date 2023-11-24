const repeatString = function(word, num) {
    if (num < 0) return "ERROR";
    let repeatedString = "";
    for (let i = 0; i < num; i++){
        repeatedString += word;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;

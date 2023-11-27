const removeFromArray = function(array, remove) {
    argumentsArray = Array.from(arguments);
    toRemoveArguments = argumentsArray.slice(1);

    for (let i = 0; i < toRemoveArguments.length; i++){
        // Check for presence of item to be removed in array
        if (array.indexOf(toRemoveArguments[i]) >= 0) {
            const index = array.indexOf(toRemoveArguments[i])
            array.splice(index, 1)
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;

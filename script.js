// (completed above) Define a function, as a function declaration, maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.

function maxOfTwoNumbers(a, b) {
    if (a > b) {
        return a
    } else if (a < b) {
        return b
    }
    return a
}

console.log("maxOfTwo", maxOfTwoNumbers(2, 100))


// Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.

maxOfThree = (a,b,c) => {
    if (a > b && a > c) {
        return a
    } else if (b > a && b > c) {
        return b
    } else if (c > a && c > b) {
        return c
}
    return a
}

console.log("maxOfThree", maxOfThree(14,15,14))

// Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.

function isCharAVowel(char) {
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
        return true;
    }
    return false;
}


console.log("isCharVowel", isCharAVowel("e"))

// Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]); would return 11.

sumArray = (array) => {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum
}

console.log("sumArray", sumArray([2, 2, 2, 10, 1000]))

// Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]); would return 40.

function multiplyArray(array) {
    let multiplication = 1
    for (let i = 0; i < array.length; i++) {
        multiplication *= array[i]
    }
    return multiplication
}

console.log("multiplyArray", multiplyArray([2, 2, 2, 10, 23]))

// Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.

function numArgs() {
    return arguments.length
}

console.log("numArgs", numArgs(2,3,4,10,11,20))

// Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. For example, reverseString('rockstar'); would return the string "ratskcor".

reverseString = (string) => {
    let reversedString = ""
    let newString = string.split("")
    for (let i = newString.length - 1; i >= 0; i--) {
        reversedString += newString[i]
    }
    return reversedString
}

console.log("reverseString", reverseString("Rockstar"))

// Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.

const longestStringInArray = function(array) {
    if (array.length === 0) {
        return 0; 
    }

    return array.reduce((maxLength, currentString) => {
        return Math.max(maxLength, currentString.length);
    }, 0);
};
console.log("longestStringInArray", longestStringInArray(["apple", "banana", "pear"]))

// Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
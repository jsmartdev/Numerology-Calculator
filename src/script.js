/* eslint-disable */

// an object key to translate each letter of a name to its corresponding number

const key = {
    "a": 1,
    "b": 2,
    "c": 3,
    "d": 4,
    "e": 5,
    "f": 6,
    "g": 7,
    "h": 8,
    "i": 9,
    "j": 1,
    "k": 2,
    "l": 3,
    "m": 4,
    "n": 5,
    "o": 6,
    "p": 7,
    "q": 8,
    "r": 9,
    "s": 1,
    "t": 2,
    "u": 3,
    "v": 4,
    "w": 5,
    "x": 6,
    "y": 7,
    "z": 8
}

// final numbers

let lifePathNum = 0;
let birthdayNum = 0;
let impressionNum = 0;
let heartsDesireNum = 0;
let personalityNum = 0;
let destinyNum = 0;
let ultimateNum = 0;

// utility numbers

let firstNum = 0;
let lastNum = 0;
let dayNum = 0;
let monthNum = 0;
let yearNum = 0;

// placeholder variable for adding up the numbers in each array

let sum = 0;

// "entry" values

let firstName = document.getElementById("first-name").value.toLowerCase();
let lastName = document.getElementById("last-name").value;
let fullName = firstName.concat(lastName);
let day = document.getElementById("birth-day").value;
let month = document.getElementById("birth-month").value;
let year = document.getElementById("birth-year").value;

// "arr" arrays

let firstArray = [];
let lastArray = [];
let vowelArray = [];
let consonantArray = [];
let dayArray = [];
let monthArray = [];
let yearArray = [];
let destinyArray = [];
let ultimateArray = [];

// takes a given variable (word or number) or other number and creates an array containing each of its letters or digits
// if the given variable is a word it refers to the "key" and populates the array with each letter's corresponding number

let populateArray = (entry, array) => {
    let str = entry.toString().toLowerCase();
    let tempArray = ("" + str).split("");
    for (i = 0; i < tempArray.length; i++) {
            let char = tempArray[i];
            if (isNaN(char) === false) {
                let num = Number(char);
                array.push(num);
            }
            else {
                array.push(key[char]);
            }
    }
}

// just like populateArray but only populates with vowels

let populateVowels = () => {
    for (i = 0; i < fullName.length; i++) {
        if (fullName[i] = "a" || "e" || "i" || "o" || "u") {
            let char = fullName[i];
            vowelArray.push(key[char]);
        }
        else if (fullName[i] = "y" && (fullname[i+1] != "a" || "e" || "i" || "o" || "u")) {
            let char = fullName[i];
            vowelArray.push(key[char]);
        }
    }
}

// just like populateArray but only populates with consonants

let populateConsonants = () => {
    for (i = 0; i < fullName.length; i++) {
        if (fullName[i] != "a" || "e" || "i" || "o" || "u") {
            let char = fullName[i];
            consonantArray.push(key[char]);
        }
        else if (fullName[i] = "y" && ((fullname[i+1] = "a" || "e" || "i" || "o" || "u") || (fullname[i-1] = "a" || "e" || "i" || "o" || "u"))) {
            let char = fullName[i];
            consonantArray.push(key[char]);
        }
    }
}

// adds up all numbers in a given array

let addArray = (arr) => {
    sum -= sum;
    let plus = 0;
    for (i = 0; i < arr.length; i++) {
        let str = arr[i];
        let add = Number(str);
        plus += add;
    }
    sum += plus;
}

// takes a given array and adds up the numbers within
// if the answer isnt a single digit number it repeats the process with the new digits
// repeats the process until it adds up to a single digit number

let getNum = (arr, num) => {
    addArray(arr);
    let sumString = sum.toString();
    if (sumString.length > 1 && sum != 11 && sum != 22) {
        while (sumString.length > 1 && sum != 11 && sum != 22) {
            let sumArray = (""+ sum).split("");
            addArray(sumArray)
        }
        num += sum;
    }
    else {
        num += sum;
    }
}

// calculates "Life Path Number"

let getLifePath = () => {
    populateArray(year, yearArray);
    populateArray(month, monthArray);
    populateArray(day, dayArray);
    getNum(yearArray, yearNum);
    getNum(monthArray, monthNum);
    getNum(dayArray, dayNum);
    let dayMonthYear = dayNum + monthNum + yearNum;
    populateArray(dayMonthYear, lifePathArray);
    getNum(lifePathArray, lifePathNum);
}

// calculates "Personality Number"

let getPersonality = () => {
    populateConsonants();
    getNum(consonantArray, personalityNum);
}

// calculates "Heart's Desire Number"

let getHeartsDesire = () => {
    populateVowels();
    getNum(vowelArray, heartsDesireNum);
}

// calculates "Destiny Number"

let getDestiny = () => {
    populateArray(firstName, firstArray);
    populateArray(lastName, lastArray); 
    getNum(firstArray, firstNum);
    getNum(lastArray, lastNum);
    let names = firstNum + lastNum;
    populateArray(names, destinyArray);
    getNum(destinyArray, destinyNum);
}

// calculates "Ultimate Number"

getUltimate = () => {
    let destinyLife = destinyNum + lifePathNum;
    populateArray(destinyLife, ultimateArray);
    getNum(ultimateArray, ultimateNum);
}

/* Template Functions */



/* Render Functions */



/* Event Handlers */



/* Main Function */
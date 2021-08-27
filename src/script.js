/* eslint-disable */

// an object key to translate each letter to its corresponding number

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

let lifePathNum = 0;
let birthdayNum = 0;
let impressionNum = 0;
let heartsDesireNum = 0;
let personalityNum = 0;
let destinyNum = 0;
let ultimateNum = 0;

let firstNum = 0;
let lastNum = 0;
let dayNum = 0;
let monthNum = 0;
let yearNum = 0;

let sum = 0;

let firstName = document.getElementById("first-name").value.toLowerCase();
let lastName = document.getElementById("last-name").value;
let fullName = firstName.concat(lastName);
let day = document.getElementById("birth-day").value;
let month = document.getElementById("birth-month").value;
let year = document.getElementById("birth-year").value;

let firstArray = [];
let lastArray = [];
let vowelArray = [];
let consonantArray = [];
let dayArray = [];
let monthArray = [];
let yearArray = [];
let destinyArray = [];
let ultimateArray = [];

// takes each form entry and creates an array containing each of its letters or digits

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

let populateVowels = () => {
    for (i = 0; i < fullName.length; i++) {
        if (fullName[i] = "a" || "e" || "i" || "o" || "u" || "y") {
            let char = fullName[i];
            vowelArray.push(key[char]);
        }
    }
}

let populateConsonants = () => {
    for (i = 0; i < fullName.length; i++) {
        if (fullName[i] != "a" || "e" || "i" || "o" || "u" || "y") {
            let char = fullName[i];
            consonantArray.push(key[char]);
        }
    }
}

let addArray = (array) => {
    sum -= sum;
    let plus = 0;
    for (i = 0; i < array.length; i++) {
        let str = array[i];
        let add = Number(str);
        plus += add;
    }
    sum += plus;
}

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

let getBirthday = () => {
    populateArray(day, dayArray);
    getNum(dayArray, birthdayNum);
}

let getImpression = () => {
    let dayMonth = dayNum + monthNum;
    populateArray(daymonth, impressionArray);
    getNum(impressionArray, impressionNum);
}

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

let getPersonality = () => {
    populateConsonants();
    getNum(consonantArray, personalityNum);
}

let getheartsDesire = () => {
    populateVowels();
    getNum(vowelArray, heartsDesireNum);
}

let getDestiny = () => {
    populateArray(firstName, firstArray);
    populateArray(lastName, lastArray);
    getNum(firstArray, firstNum);
    getNum(lastArray, lastNum);
    let names = firstNum + lastNum;
    populateArray(names, destinyArray);
    getNum(destinyArray, destinyNum);
}

getUltimate = () => {
    let destinyLife = destinyNum + lifePathNum;
    populateArray(destinyLife, ultimateArray);
    getNum(ultimateArray, ultimateNum);
}






/* Template Functions */



/* Render Functions */



/* Event Handlers */


document.getElementById("form-button").addEventListener("click", handleSubmit);


function handleSubmit() {
    console.log(firstName.toLowerCase());
}



/* Main Function */
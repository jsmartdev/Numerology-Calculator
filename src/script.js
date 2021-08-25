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
let innerSoulNum = 0;
let characterNum = 0;
let destinyNum = 0;

let firstName = document.getElementById("first-name").value;
let lastName = document.getElementById("last-name").value;
let day = document.getElementById("birth-day").value;
let month = document.getElementById("birth-month").value;
let year = document.getElementById("birth-year").value;

// reduction of multi digit numbers down to single digits is always done by subtracting the lower number digit from the higher number

// calculate "Life Path Number" , sum of all numbers in you birthdate

let lifePathMath = () => {
    lifeDigits = [];
    let dayDigits = (""+ day).split("");
    for (i = 0; i < dayDigits.length; i++) {
        lifeDigits.push(dayDigits[i]);
    }
    let monthDigits = (""+ month).split("");
    for (i = 0; i < monthDigits.length; i++) {
        lifeDigits.push(monthDigits[i]);
    }
    let yearDigits = (""+ year).split("");
    for (i = 0; i < yearDigits.length; i++) {
        lifeDigits.push(yearDigits[i]);
        let sum = 0;
        for (i = 0; i < impDigits.length; i++) {
        let str = impDigits[i];
            let num = Number(str);
            sum += num;
        }
        let sumDigits = (""+ sum).split("");
        if (sumDigits.length > 1) {
            lifeLoop(sum);
        }
        else {
            lifePathNum += sum;
        }    
    }
}

function lifeLoop(param) {
    let paramDigits = (""+ param).split("");
    let sum = 0;
        for (i = 0; i < paramDigits.length; i++) {
            let str = paramDigits[i];
            let num = Number(str);
            sum += num;
        }
        let sumDigits = (""+ sum).split("");
        if (sumDigits.length > 1) {
            birthdayLoop(sum);
        }
        else {
            lifePathNum += sum;
        }    
}

// calculate "Birthday Number"

let birthdayMath = () => {
    let dayDigits = (""+ day).split("");
    if (dayDigits.length > 1) {
        let sum = 0;
        for (i = 0; i < dayDigits.length; i++) {
            let str = dayDigits[i];
            let num = Number(str);
            sum += num;
        }
        let sumDigits = (""+ sum).split("");
        if (sumDigits.length > 1) {
            birthdayLoop(sum);
        }
        else {
            birthdayNum += sum;
        }    
    }
    else {
        birthdayNum += day;
    }
}

function birthdayLoop(param) {
    let paramDigits = (""+ param).split("");
    let sum = 0;
        for (i = 0; i < paramDigits.length; i++) {
            let str = paramDigits[i];
            let num = Number(str);
            sum += num;
        }
        let sumDigits = (""+ sum).split("");
        if (sumDigits.length > 1) {
            birthdayLoop(sum);
        }
        else {
            birthdayNum += sum;
        }    
} 
// calculate "First Impression Number" - reduce the sum of the month and day of birthdate to a single digit number

let impressionMath = () => {
    let impDigits = [];
    let dayDigits = (""+ day).split("");
    for (i = 0; i < dayDigits.length; i++) {
        impDigits.push(dayDigits[i]);
    }
    let monthDigits = (""+ month).split("");
    for (i = 0; i < monthDigits.length; i++) {
        impDigits.push(monthDigits[i]);
    }
    let sum = 0;
    for (i = 0; i < impDigits.length; i++) {
        let str = impDigits[i];
            let num = Number(str);
            sum += num;
    }
    let sumDigits = (""+ sum).split("");
        if (sumDigits.length > 1) {
            impressionLoop(sum);
        }
        else {
            impressionNum += sum;
            
        }    
}

function impressionLoop(param) {
    let paramDigits = (""+ param).split("");
    let sum = 0;
        for (i = 0; i < paramDigits.length; i++) {
            let str = paramDigits[i];
            let num = Number(str);
            sum += num;
        }
        let sumDigits = (""+ sum).split("");
        if (sumDigits.length > 1) {
            impressionLoop(sum);
        }
        else {
            impressionNum += sum;
            
        }    
}

// calculate "Inner Soul Number" - sum of all vowels in birth name, reduced down to single digit number

let innerSoulMath = () => {

}

// calculate "Character Number" - sum of all consonants in birth name, reduced down to single digit

let characterMath = () => {

}

// calculate "Destiny Number" - sum of all letters in birth name, reduced down to single digit

let destinyMath = () => {

}



/* Template Functions */



/* Render Functions */



/* Event Handlers */



/* Main Function */
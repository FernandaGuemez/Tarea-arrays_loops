//Sum of Resistors in Series
 

// Calculate the sum of all resistors connected in series.
// Examples:
// - `sumResitance([-1,5,6,3])` should return `"15 ohms"`. (|−1| + 5 + 6 + 3 = 15)
// - `sumResitance([14,3.5,6])` should return `'23.5 ohms'`. (14 + 3.5 + 6 = 23.5)
// - `sumResitance([8,15,100])` should return `'123 ohms'`. (8 + 15 + 100 = 123)

//Note: This approach uses the absolute value of each resistance to ensure all values are positive.


const sumResistances = resistanceValues => {
    let sum = 0; 
    for (let index = 0; index < resistanceValues.length; index++) {
            let resistance = resistanceValues[index];
        if (resistance < 0) {
            resistance = resistance * (-1);
        }
        sum = sum + resistance;
    }
    return sum;
};

console.log(sumResistances([-1, 5, 6, 3]));
console.log(sumResistances([14, 3.5, 6]));
console.log(sumResistances([8, 15, 100]));

/////////////////////////////////////////////////

// Number divided into halves
 

// Given a number, return the number divided into its halves in an array.
 

// Examples:
// - `numDiv(4)` should return `[2, 2]`.
// - `numDiv(10)` should return `[5, 5]`.



// Note: The original example for `numDiv(10)` appears to be incorrect.
 

const numDiv = number => {
    const array = [];
    const half = number / 2;
    array.push(half); 
    array.push(half); 

    return array;
};

console.log(numDiv(800));





///////////////////////////////////////////////////////////

// Secret Society
 

// Find the name of a secret society based on the first letter of each member's name.
 
// Examples:
// - `secretName(["Esperanza", "Franco", "Nia"])` should return `'EFN'`.
// - `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` should return `'CJMPRR'`.
// - `secretName(['Harry', 'Ron', 'Hermione'])` should return `'HRH'`.
 
const secretName = (arraySociety) => {
    let secret = "";

    arraySociety.forEach((value) => {
        secret += value[0];
    });

    return secret;
};

console.log(secretName(["Esperanza", "Franco", "Nia"]));
console.log(secretName(["Phoebe", "Ross", "Chandler", "Joey", "Monica", "Rachel"]));
console.log(secretName(["Harry", "Ron", "Hermione"]));




//////////////////////////////////////////////////////////////////////


// Online status
 
// Display online status for a list of users.
 
// Example:
// - `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` should return `'mockIng99, J0eyPunch and 1 more online'`.
 
const onlineStatus = (listUsers) => {
    let text = "";
    if (listUsers.length > 1) {
        text = listUsers.length >= 3 ? `${listUsers.slice(0, 2).join(",")} and ${listUsers.length - 2} more online` : `${listUsers.slice(0, 2).join(", ")} are online`;
        return text;
    }
    return `${listUsers[0]} is online`;
};

console.log(onlineStatus(["mockIng99"]));
console.log(onlineStatus(["mockIng99", "J0eyPunch"]));
console.log(onlineStatus(["mockIng99", "J0eyPunch", "glassedFer"]));
console.log(onlineStatus(["mockIng99", "J0eyPunch", "glassedFer", "J0eyPunch", "glassedFer"]));




///////////////////////////////////////////////////////////////////////


// Array of Multiples
 

// Create a function that takes two parameters (number, length) and returns an array of length containing multiples of the number.
 

// Examples:
// - `arrayMultiplos(2, 10)` should return `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]`.
// - `arrayMultiplos(17, 6)` should return `[17, 34, 51, 68, 85, 102]`.
 

const arrayMultiplos = (number, len) => {
    let arrayNumber = [];
    for (let index = 1; index <= len; index++) {
        arrayNumber.push(number * index);
    }
    return arrayNumber;
};

console.log(arrayMultiplos(2, 10));
console.log(arrayMultiplos(17, 6));


////////////////////////////////////////////////////////////////////

// Positive dominance in Array
 

// Write a function to determine if an array is positively dominant.
// An array is positively dominant when the majority of its elements are positive.
 

// Example:
// - `positiveDom([-1, -3, -5, 4, 6767])` should return `false`.
 

const positiveDom = (arrayNumber) => {
    let totalPositive = 0;
    arrayNumber.map((value) => {
        if (Math.sign(value) === 1) {
            totalPositive++;
        }
    });
    return totalPositive > arrayNumber.length / 2 ? true : false;
};

console.log(positiveDom([-1, -3, -5, 4, 6767])); 
console.log(positiveDom([1, 3, 5, -4, -6767]));

///////////////////////////////////////////////////////////////////////////

// Antipodal Average
 

// Given an array, return a shorter array following these steps:
// - Split the array into two equal parts*. If unequal, remove the middle element to obtain two equal arrays.
// - Sum each number of the first part with the inverse numbers of the second part.
// - Divide each number of the resulting array by 2.
 

// Example:
// - For the array `[1,2,3,5,22,6]`, the result should be `[3.5, 12, 4]`. */

const antipodalAverage = (arrayNumbers) => {
    let totalLenght = arrayNumbers.length;
    let arrayEnd = [];
    let mid = Math.trunc(totalLenght / 2);
    let array1 = arrayNumbers.slice(0, mid);
    let array2 = arrayNumbers.slice(totalLenght % 2 === 0 ? mid : mid + 1, totalLenght).reverse();
    for (let index = 0; index < mid; index++) {
        arrayEnd.push((array1[index] + array2[index]) / 2);
    }
    return arrayEnd;
};

console.log(antipodalAverage([1, 2, 3, 5, 22, 6]));
console.log(antipodalAverage([1, 2, 3, 5, 22, 6, 8]));

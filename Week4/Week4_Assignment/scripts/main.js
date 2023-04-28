//1.
console.log("\nQuestions 1: ");
let ages = [3,9,23,64,2,8,28,93]

let lastMinusFirst = array => (array[array.length - 1] - array[0])

console.log("first index minus first index:  " + lastMinusFirst(ages))
ages.push(29);
console.log("first index minus first index after push:  " + lastMinusFirst(ages))

let averageAges = 0;
for(let x = 0; x < ages.length; x++){

    averageAges += ages[x];
}
averageAges /= averageAges/ages.length
console.log(`This is the average of the ages array: ${averageAges}`)

//2.
console.log("\nQuestions 2: ");
let names = ["Sam", 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let averageNumOfCharacters = 0;

console.log(names[0].length);
for(let x = 0; x < names.length; x++){

    averageNumOfCharacters += names[x].length;
}
averageNumOfCharacters /= names.length;
console.log(`This is the average number of characters in the names array: ${averageNumOfCharacters}`)

let concNames = '';
names.forEach(index => {
    concNames += index + " "
});
concNames.trim();
console.log(`below is the list of names in the array:\n${concNames}`)

//3.
console.log("\nQuestions 3: ");
console.log("You find the last element of the array by doing \"variable[variable.length - 1]\"");

//4.
console.log("\nQuestions 4: ");
console.log("You find the first element of the array by doing \"variable[0]\"");

//5.
console.log("\nQuestions 5: ");
let namesLengths = [];
names.forEach(index => {

    namesLengths.push(index.length);
});
console.log(namesLengths);

//6.
console.log("\nQuestions 6: ");
console.log("The sum of the nameLengths array is: " + namesLengths.reduce( (sum, currValue) => (sum + currValue), 0))

//7.
console.log("\nQuestions 7: ");
let repeatingString = (word, n) => {

    let result = "";
    for(let x = 0; x < n; x++){
        result += word;
    }
    return result;
}

console.log(repeatingString("Welcome to the jungle ", 5));

//8.
console.log("\nQuestions 8: ");

let fullName = (firstName, lastName) => (firstName + " " +  lastName);
console.log(`My full name is ${fullName("Jeffrey", "Hennen")}`);

//9.
console.log("\nQuestions 9: ");

let numArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13]
console.log(numArray);
let sum = 0;
sum = numArray.reduce( ((sum, currValue) => (sum + currValue)), 0)
console.log(`The sum of the array is: ${sum}`);
console.log("The sum of the array is greater than 100: " + sum > 100 ? true: false);


//10.
console.log("\nQuestions 10: ");
function averageArray(array){

    let sum = 0;
    for(let x = 0; x < array.length; x++){
        sum +=array[x];
    }
    return sum / array.length;
}

//11.
console.log("\nQuestions 11: ");

let numberArray1 = [5,25,841];
let numberArray2 = [84,6,2,0,1,4,45];


function arrayAverageBiggerThan (array1, array2){
    
    return averageArray(array1) > averageArray(array2);
}
let average1 = averageArray(numberArray1);
let average2 = averageArray(numberArray2);
console.log(`Below is the first array and it's average is as follows: ${average1}\n${numberArray1}`);
console.log(`Below is the first array and it's average is as follows: ${average2}\n${numberArray2}`);
console.log(`Array1 is larger than array2: ${average1 > average2}`);


//12.
console.log("\nQuestions 12: ");
function willBuyDrink(isHotOutside, moneyInPocket){

    if(isHotOutside && (moneyInPocket > 10.5)){
        return true;
    }else{
        return false;
    }
}
let isHotOutside = true;
let moneyInPocket = 10.0
console.log(`it is hot outside: ${isHotOutside}, I have $${moneyInPocket} in my pocket. Will I buy a drink: ${willBuyDrink(isHotOutside,moneyInPocket)}`)

//13.
console.log("\nQuestions 13: ");
/*
This function will end up taking the cash invested on a property, 
then taking the cashflow of the property and finding the cash on cash return which is annual cashflow / invested and will return that value.
*/
let cashOnCash = (cashflow, invested) => (cashflow / invested * 100);
let cashflow = 750;
let invested = 25000;

console.log(`cashflow: ${cashflow}, total amount invested ${invested}, cash on cash return = ${cashOnCash(cashflow, invested)}%`)

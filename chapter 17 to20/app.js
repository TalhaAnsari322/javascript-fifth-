// Question: 1
// Declare and initialize an empty multidimensional array.
// (Array of arrays)

let emptyarray = [[]]

// Question: 2
// Declare and initialize a multidimensional array
// representing the following matrix:

let matrix = [[0, 1, 2, 3],
[1, 0, 1, 2],
[2, 1, 0, 1]
]
console.log(matrix)

//Question: 3
// Write a program to print numeric counting from 1 to 10.

for (let i = 1; i <= 10; i++) {
    const element = i;
    console.log(element)
}

//Question: 4
// Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

let tableNumbre = prompt("Enter a number to show its multiplication table");
let Length = prompt('Enter length multiplication table')

console.log('Multiplication Table of',tableNumbre)
console.log('Length',Length)
for (let i = 1; i <= Length; i++) {
    const element = `${tableNumbre} * ${i} =  ${tableNumbre * i}`
    console.log(element)
}

// Question: 5
// Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

let fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry']

for (let i = 0; i < fruits.length; i++) {
    let result = fruits[i];
    console.log(result)
}

for (let i = 0; i < fruits.length; i++) {
    console.log(`Element at index ${i} is ${fruits[i]}`)
}


//Question: 6
// Generate the following series in your browser. See
// example output.

// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
let counting = '';
let result1;
for (let i = 1; i <= 15; i++) {
    result1 = i;
    counting = counting + result1 + ', '

}
console.log(counting)


// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
let reverse = '';
let result2;
for (let i = 10; i >= 1; i--) {
    result2 = i;
    reverse = reverse + result2 + ', '
}
console.log(reverse)


// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
let even = '';
let result3;
for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        result3 = i;
        even = even + result3 + ', '
    }

}
console.log(even)


// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
let odd = '';
let result4;
for (let i = 0; i <= 20; i++) {
    if (i % 2 === 1) {
        result4 = i;
        odd = odd + result4 + ', '
    }

}
console.log(odd)


// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
let series = '';
let result5;
for (let i = 2; i <= 20; i++) {

    if (i % 2 === 0) {
        result5 = `${i}k`;
        series = series + result5 + ', '


    }
}
console.log(series)



//Question: 7
// You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:


let bakery = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
let input = prompt('Welcome to TS Bakery. What do you want to order sir/mam?')
let found = false;
for (let i = 0; i < bakery.length; i++) {
    if (bakery[i] === input) {
        found = true;
        break;
    }
}
if (found) {
    console.log(`${input} is available at index ${bakery.indexOf(input)} in our bakery`)
} else {
    console.log(`We are sorry. ${input} is not avaiable in our bakery`)
}

//Question:8
// Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

let A = [24, 53, 78, 91, 12]

let result6 = Math.max(...A)
console.log(`Largest Number is : ${result6}`)

//Question: 10
// Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]

let smallest = [24, 53, 78, 91, 12]
let result7 = Math.min(...A)
console.log(`Smallest Number is : ${result7}`)


//Question:10
// Write a program to print multiples of 5 ranging 1 to
// 100.
let ranging = '';
let result8;
for (let i = 5; i <= 100; i += 5) {
    result8 = i;
    ranging = ranging + result8 + ', ';
}
console.log(ranging)
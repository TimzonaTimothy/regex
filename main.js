//learnable task
//Write a JavaScript program to validate a credit card number.

//Program to valid visa card

let sample = "4000000000099";

const my_regex = /^4[0-9]{12}(?:[0-9]{3})?$/;

// where
// ^ represents the starting of the string.
// 4 represents the string that should start with 4.
// [0-9]{12} represents the next twelve digits should be any between 0-9.
// ( represents the start of the group.
// ? represents the 0 or 1 time.
// [0-9]{3} represents the next three digits should be any between 0-9.
// ) represents the ending of the group.
// ? represents the 0 or 1 time.
// $ represents the ending of the string.

let result = my_regex.test(sample)
console.log(result);


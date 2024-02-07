// // prefer not use var for declaring the variables for most of the time

// let cco=undefined;

// console.log(typeof(cco));

// console.log(1+"2");

// console.log("1"+2);

// console.log("1"+"2");

// console.log("1" + 2 + 2);

// // when performing operations please keep in mind that use more of the paranthesis to improve code readibility eg..
// // 3 + 4 * 5 % 3 ------ not good
// // ( 3 + 4) * (5 % 3) ----- good

// console.log(1 + 2 + "2");

// console.log(+true);

// console.log(+"");

// let game=100

// game++

// console.log(game)
// ++game
// console.log(game)

// console.log("---------------comparisons---------");

// console.log(2>1);

// console.log("2">1); // automatically converted into a number

// console.log(2>"1"); // true

// console.log(null>1); // false

// console.log(null==0); // false

// console.log(undefined==0); // false

// console.log(undefined>=0); // false

// console.log(undefined<0); // true

// // remembr : 
// // == and <= and >= <> <, > work differentely 
// // comparisons convert null into number which is treated as 0 thats why ::  console.log(null>1); // false but console.log (null>=0) // true

// // === checks the value as well as the data type 

// console.log("5"===5); // false
// console.log("5"==5); // true

// // map , filter , reduce





// console methods

console.log(console);  // prints the methods that console can uses...

console.log("hello");

// print how much time they has taken ....

console.time();
console.timeEnd();

console.time()
for ( i=0;i<5;i++){
    console.log(344);
}
console.timeEnd()
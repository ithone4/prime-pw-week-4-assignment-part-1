console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
console.log ('Hello World!', hello());

// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  
  return 'Hello ' + name;
}
console.log( helloName('Jackie'));
// Remember to call the function to test


// 3. Function to add two numbers together & return the result
function addNumbers( num0, num1 ) {
  console.log('in addNumbers:', num0, num1);
  let answer = num0 + num1;
  return answer;
  // return firstNumber + secondNumber;
}
console.log( 'running addNumbers with 1 & 2:' ,addNumbers(1, 2));


// 4. Function to multiply three numbers & return the result
function multiplyThree( num0, num1, num2 ){
  console.log('in multiplyThree:' , num0, num1, num2);
  let answer = num0 * num1 * num2;
  return answer;
}
console.log( 'running multiplyThree with 4 & 5 & 10:' ,multiplyThree(4, 5, 10));


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  console.log('in isPositive:' ,number );
  if ( number > 0 ){
    return true;
  }else
    return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let Fam=['Jackie', 'Sam', 'Big Money', 'Baby'];
console.log(Fam);
function getLast( Fam ) {
    return Fam[Fam.length -1];

}
console.log('getLast(Fam):' , getLast(Fam) );

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  for ( let i=0; i<array.length; i++) {
    return ( array[i] === value ? true : false );
  }
  
}
let nephews = ["Jude", "Jace", "Cooper", "Marshal", "Shea"];
console.log('find nephews:' , find("Jude",nephews));
console.log('find nephews:' ,find("Batman",nephews));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  return ( string[0] === letter ? true : false);
}
console.log( 'isFirstLetter - should say true', isFirstLetter('S', 'Sleepy') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

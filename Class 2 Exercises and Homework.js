// 1. Create an object representation of yourself
// Should include: 
// - firstName
// - lastName
// - 'favorite food'
// - bestFriend (object with the same 3 properties as above)
const myself = {
  firstName: 'Danh',
  lastName: 'Truong',
  'favorite food': 'Mongolian Beef',
  bestFriend: {
    firstName: 'Thao',
    lastName: 'Truong',
    'favorite food': 'pizza'
  }
};



// 2. console.log best friend's firstName and your favorite food
console.log(`answer #2: ${myself.bestFriend.firstName}`);
console.log(`answer #2: my favorite food is ${myself['favorite food']}`);


// 3. Create an array to represent this tic-tac-toe board
// -O-
// -XO
// X-X

const gameBoard = [['-','O','-'],['-','X','O'],['X','-','X']];


// 4. After the array is created, 'O' claims the top right square.
// Update that value.

gameBoard[0][2] = 'O';

// 5. Log the grid to the console.

console.log(gameBoard);

// 6. You are given an email as string myEmail, make sure it is in correct email format.
// Should be 1 or more characters, then @ sign, then 1 or more characters, then dot, then one or more characters - no whitespace
// i.e. foo@bar.baz
// Hints:
// - Use rubular to check a few emails: https://rubular.com/
// - Use regexp test method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test

let regex = /^[a-zA-Z0-9^\S+]+@[a-zA-Z0-9^\S+]+\.[a-zA-Z0-9^\S+]+$/;
let string = 'myEmail@yahoo.com';
let result = regex.test(string);
console.log(`answer #6: ${result}`);


// 7. You are given an assignmentDate as a string in the format "month/day/year"
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date


const assignmentDate= new Date('1/21/2019');
console.log(`answer #7: assignment Date is ${assignmentDate}`);


// 8. Create a new Date instance to represent the dueDate.  
// This will be exactly 7 days after the assignment date.
 
  const dueDate = assignmentDate.setDate(assignmentDate.getDate()+ 7);

  const resultDueDate = new Date(dueDate);
  



// 9. Use dueDate values to create an HTML time tag in format
// <time datetime="YYYY-MM-DD">Month day, year</time>
// I have provided a months array to help
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];


// 10. log this value using console.log
  console.log(`answer #10: due day is ${resultDueDate}`);

  const  dueDayString = new Date('01/28/2019');
  let month = months[dueDayString.getMonth()];
  console.log(month);



  
  
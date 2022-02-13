// String concatenation

const myName = 'Brabara';
const lastName = 'Conchord';

let a = 12;
let b = 18;

//  a + b are variables "before"

console.log(`hello my name is ${myName} and my age is not ${a}`);
console.log(`My first name  is ${myName + lastName} and my age is ${a + b}`);

// const a + b = my aged - reflecting a change of variables "after"

const combined = myName + lastName;
console.log(combined);

// I need there to be a printed space between myName and lastName
// but that doesnt seem to be happening 
// if i add a " + " it only adds the + , dang

console.log(`My full name is ${combined}`);

// numbers before are 7 and 21

let c = 7;
let d = 21;
console.log(`twenty eight is ${c + d} and
not ${3 * c + d}.`);

// twenty eight is 28 and
// not 42 


// Array 

const morningRoutine = ["wake up", "preworkout", "running clothes on", "go run", "shower", "find coffee"];
console.log(morningRoutine);
const firstElement = morningRoutine.shift();
console.log(morningRoutine);

// first "wake up" is now removed from the list

console.log(firstElement);

// should list only "wake up"

// before prints all variables
// after -


// Booleans

// setting value
let r = 4;
let t = 3;
console.log(r + t);
console.log(r ==4);

//but make it false

console.log(!t ==3);


// should generate false with the ! in front 



// agh i am trying to make a statemnt true vs false. 









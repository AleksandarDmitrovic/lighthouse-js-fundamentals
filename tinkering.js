function multiply(a,b) {
  return a * b;
}


const result = multiply(2,4);


console.log(result);

// for ... of loops 

const amounts = [61.00, 52.25, 112.99, 5.00];

let total = 0

for (let amount of amounts) {

  total += amount;
  
}

console.log('Order total is: ' , total);


//Laugh function outputing numers of ha(s) 

function laugh (num) {

  const oneLaugh = 'ha';

  let fullLaugh = '';

  for (let i = num; i > 0; i--){

    fullLaugh += oneLaugh;

  }

  return fullLaugh + '!';
  
}

console.log(laugh(3));

//Build a * triangle - function

function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* "
  }
  return line + "\n";
}

function buildTriangle(size) {

  var triangle = '';

  for (var i = 1; i <= size; i++) {

    triangle += makeLine(i);
    
  }

    return triangle;
    
}

// Inline function practice

function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));


emotions('happy', function laugh(num) {

  const oneLaugh = 'ha';

  let fullLaugh = '';

  for (let i = num; i > 0; i--){

    fullLaugh += oneLaugh;

  }

  return fullLaugh + '!';
  
} )
//CODE EVALUATION PROBLEMS

//voting station calculation
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];



const chooseStations = function (stations) {
  const goodStations = [];

  for (const station of stations) {
    
    const capacity = station[1]

  
    if (capacity >= 20) {

      const type = station[2]

      if(type === 'school' || type === 'community centre') {
        
        goodStations.push(station[0]);


      }
    }
  }
  return goodStations;
}





console.log(chooseStations(stations));


// X Marks the Perfect Shot 


const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

const finalPosition = function (moves) {
  let position = [0,0];

  for (let move of moves) {

    switch(move){
    case 'east':
      position[0] += 1;
      break;
      
    case 'west':
      position[0] -= 1;
      break;
    
    case 'north':
      position[1] += 1;
      break;
      
    case 'south':
      position[1] -= 1;
      break;

    }
  }

  return position;

}



console.log(finalPosition(moves));

// Functions - Age calculator

let ageCalculator = function (name, yearOfBirth, currentYear) {
  
  let age = currentYear - yearOfBirth

  return name + ' is ' + age + ' years old.'
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));

// Functions – howManyHundreds

function howManyHundreds(num) {
  let containers = '';
  
  if (num >= 100) {
    
    containers = (num / 100) - ((num % 100) / 100);

  } else {

    containers = 0;

  }

  return containers
}



console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);


//Functions - Area Calculators

function calculateRectangleArea(length, width) {
  let area = length * width;

  if (length > 0 && width > 0) {
   
    return area;

  }  else {

    return undefined;

  }
  
}

function calculateTriangleArea(base, height) {
  let area = base * height / 2;

  if (base > 0 && height > 0) {
   
    return area;

  }  else {

    return undefined;

  }
  
}

function calculateCircleArea(radius) {
  let area = Math.PI * Math.pow(radius,2);

  if (radius > 0) {
   
    return area;

  }  else {

    return undefined;

  }
  
}






console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined


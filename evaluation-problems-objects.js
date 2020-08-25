// Objects - Trash to Treasure

const smartGarbage = function(trash, bins) {

  if(trash === 'waste') {
    
    bins.waste += 1;

  } else if (trash === 'recycling'){

    bins.recycling = bins.recycling + 1;

  } else if (trash === 'compost') {

    bins.compost += 1;
    
  }

  return bins;

}



console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));


//Objects - Driving Mayor Daisy

const carPassing = function (cars, speed) {
  
  let carObject = {
    time: Date.now(),
    speed: speed
  };

  cars.push(carObject);

  return cars;

}

const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

const speed = 38

console.log(carPassing(cars, speed));


// Objects - We're Rooting For You! 
/*
let vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

let metric = 'redness'

*/

let vegetables = [
  {
    submitter: 'A',
    d: 5,
  },
  {
    submitter: 'B',
    d: 10,
  },
  {
    submitter: 'C',
    d: 25,
  }
]
let metric = 'd'

const judgeVegetable = function(vegetables, metric) {

  let highestValue = 0;
  
  let positionInArray = 0;

  for(let i = 0; i < vegetables.length; i++) {

    if(vegetables[i][metric] > highestValue) {

      highestValue = vegetables[i][metric];

      positionInArray = i;

    }

  }

  return vegetables[positionInArray].submitter;
  
};

console.log(judgeVegetable(vegetables, metric));



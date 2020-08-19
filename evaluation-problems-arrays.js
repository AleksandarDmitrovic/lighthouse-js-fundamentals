// Looping - Range

function range (start, end, step) {

  let numArray = [];

  if (end > start && step > 0 && start !== undefined && end !== undefined) {

    for(let i = start; i <= end; i += step) {

      numArray.push(i);

    }

    return numArray;

  } else {

    return numArray;

  }

}






console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));

// Looping - lastIndexOf

function lastIndexOf(array, num) {

  for(let i = array.length -1; i >= 0; i--) {

    if(array[i] === num) {

      return i;

    } 

  } 

  return -1;
  
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);

// Loopy Lighthouse 2 stretch project

// Concatenate Arrays


/*
function concat(survey1,survey2) {
  
  let newArray = [];

  newArray = survey1.concat(survey2);
  
  return newArray;

}
*/
function concat(survey1,survey2) {

  for (let i = 0; i < survey2.length; i++) {

    survey1.push(survey2[i]);
    
  }

  return survey1;
  
}
  
  


console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);

// Merge Arrays stretch project
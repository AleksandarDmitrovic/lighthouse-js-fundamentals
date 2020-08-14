/* code that prints 100 to 200 incusivly with three exceptions:
1. multiple of 3 prints 'Loopy'
2. multiple of 4 prints 'Lighthouse'
3. multiples of 3 & 4 prints 'LoopyLighthouse'
*/

for (let i = 100; i <= 200; i++) {

  if (i % 3 === 0 && i % 4 === 0) {

    console.log('LoopyLighthouse');

  } else if (i % 3 === 0) {

    console.log('Loopy');

  } else if (i % 4 === 0) {

    console.log('Lighthouse');

  } else {
  
    console.log(i);

  }

}

// Code your solutions in this file

const { interfaces } = require("mocha");

/*function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
      console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
   
    return gifts;
  }
   
  wrapGifts(gifts);
*/
// const writeCards(names)(["Ada", "Brendan", "Ali"], "birthday"); 



function writeCards(names, surprize) {
    // let arr =[]
      for (let i = 0; i < names.length; i++) {
           names[i]=(`Thank you, ${names[i]}, for the wonderful ${surprize} gift!`);
      }
      return names;
  }



//   const countDown(integers) = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 
function countDown(integers) {
  while (integers >= 0) {
    console.log(integers--);
  }
 
  return integers;
}

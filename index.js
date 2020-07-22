
 
function writeCards (gifts, surprize) {
    let arr = []
  for (let i = 0; i < gifts.length; i++) {
    arr.push(`Thank you, ${gifts[i]}, for the wonderful ${surprize} gift!`);
  }
 
  return arr;
}
 
function countDown(num) {

    while (num >= 0) {
        console.log(num);
 num--
    }
}
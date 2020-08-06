const names = ["Ada", "Brendan", "Ali"];
function writeCards(names, birthday) {
  let message = []
   for (let i = 0; i < names.length; i++) {
    message.push(`Thank you, ${names[i]}, for the wonderful ${birthday} gift!`);
}
return message
}
writeCards(names)

function countDown(numbers){
  while (numbers >= 0){
    console.log(numbers)
    numbers--
  }
}
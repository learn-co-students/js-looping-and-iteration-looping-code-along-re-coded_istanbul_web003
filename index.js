// Code your solutions in this file

const names = ["Ada", "Brendan", "Ali"];
const day = "birthday";


function writeCards(names, day){
    let gratitudeCard = [];
    for (let i=0; i<names.length; i++){
      gratitudeCard.push(`Thank you, ${names[i]}, for the wonderful ${day} gift!`);
    }

    return gratitudeCard;
}

writeCards(["Ada", "Brendan", "Ali"], "birthday");




function countDown(i)
{
  let countDown = i;
    while( i >= 0)

    {
        console.log(i);
        i--;
    }
}
countDown(10);
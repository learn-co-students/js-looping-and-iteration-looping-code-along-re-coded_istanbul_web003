// Code your solutions in this file
function writeCards(listFriends, celebratedDay){
    let gratitudeCard = [];
    for (let i=0; i<listFriends.length;i++){
      gratitudeCard.push(`Thank you, ${listFriends[i]}, for the wonderful ${celebratedDay} gift!`);
    }

    return gratitudeCard;
}

writeCards(["Ada", "Brendan", "Ali"], "birthday");


function countDown(DD){
    while (DD >=0) {
        console.log(DD);
        DD--;
        
    }

}
countDown(10);
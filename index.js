// Code your solutions in this file
function writeCards(names, message){
    const empty = [];
    for (let name of names){
        empty.push(`Thank you, ${name}, for the wonderful ${message} gift!`);

    }
    return empty;
}
//writeCards(["Ada", "Brendan", "Ali"]);

function countDown(i){
    let j = i ;
    while (j >= 0){
        console.log(j);
        j--;

    }
}
//countDown(10);
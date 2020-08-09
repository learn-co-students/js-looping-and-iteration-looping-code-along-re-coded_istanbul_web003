// Code your solutions in this file




function writeCards(replys , birthday) {
    let arr = [];
    for ( let i = 0;  i < replys.length ; i++)
    {
        arr.push(`Thank you, ${replys [i]}, for the wonderful ${birthday} gift!`);
    }
    return arr;

}

// function countDown(number) {
//     // let countingDown = 10;
//     for (  number ; number >= 0 ; number--)
//     console.log (number);
//     }
    // let result = countdown(4);  

    // console.log(result);

function countDown (number) {
    // let i = true
    while (number >=0){
        console.log (number) 
        number--
    };
}
// // countDown(10);
 

// Code your solutions in this file
function writeCards(names,event){
    let array =[];
  for(let i =0;i<names.length;i++){
       array.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
return array
}
writeCards( ['Lisa', 'Kaitlin', 'Jan' ], 'surprise');

 

function countDown(num){
    while (num>=0) {
        console.log(num--)
    }
    
}

countDown(10);
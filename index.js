function writeCards(name, evtname){
  let counter=0;
  const message=[];
  for(let i=0; i<name.length;i++){
    counter++;
    message.push("Thank you, " + name[i]+", for the wonderful surprise gift!");
  }
  return message;
}

function countDown(int){
  while(int>=0){
    console.log(int);
    int--;
  }
}
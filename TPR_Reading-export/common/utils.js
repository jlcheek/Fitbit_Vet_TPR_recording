// Add zero in front of numbers < 10
export function zeroPad(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

//gets the next int from 0-9
export function getNextInt(i){
  if(i === "0") return 1;
  else if(i === "1") return 2;
  else if(i === "2") return 3;
  else if(i === "3") return 4;
  else if(i === "4") return 5;
  else if(i === "5") return 6;
  else if(i === "6") return 7;
  else if(i === "7") return 8;
  else if(i === "8") return 9;
  else return 0;
}//getNextInt

//gets the next int from 0-9
export function getPrevInt(i){
  if(i === "0") return 9;
  else if(i === "1") return 0;
  else if(i === "2") return 1;
  else if(i === "3") return 2;
  else if(i === "4") return 3;
  else if(i === "5") return 4;
  else if(i === "6") return 5;
  else if(i === "7") return 6;
  else if(i === "8") return 7;
  else return 8;
}//getNextInt

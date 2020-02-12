function range(num1, num2, diff = 5){
  let start = num1;
  let end = num2;
  let arrayOfRange = [];
  if(diff >= 0 ){
    for(let i = start; i <= end; i+= diff) {
      arrayOfRange.push(i);
      }
  }
  else {
    for(let i = start; i >= end; i += diff) {
      arrayOfRange.push(i);
      }
  }

  return arrayOfRange;
}

function sum([...arr]) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
    }
    return sum;
  }

console.log(sum(range(5, 2, -1)));
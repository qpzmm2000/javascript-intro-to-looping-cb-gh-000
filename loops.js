function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}

function forLoop(array){
  for(let i = 0; i < 25; i++)
  {
    array[array.length + i] = (`"I am ${i} strange loop${i === 0 ? '' : 's'}."`);
  }
}
function whileLoop(num)
{
  while (num > 0) {
    console.log(--num)
  }
  return 'done'
}
function doWhileLoop(array){
  do{
    array.pop();
  }while(array.length > 0 && maybeTrue())
}

function forLoop(array){
  for(let i = 0; i < 25; i++)
  {
    array.push(`"I am ${i} strange loop${i === 0 ? '' : 's'}."`);
  }
}
function whileLoop(num)
{
  while (num > 0) {
    console.log(--num)
  }
  return 'done'
}

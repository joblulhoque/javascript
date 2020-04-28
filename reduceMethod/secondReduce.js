const euros = [29.76, 41.85, 46.5];

const average = euros.reduce((total, amount, index, array) => {
  total += amount;
  if( index === array.length-1) { 
    return total/array.length;
  }else { 
    return total;
  }
});
console.log(average);
const eurosTwo = [29.76, 41.85, 46.5];
const secAve = eurosTwo.reduce((total, amount, index, array)=>{
 total += amount
 return total/array.length
},0);
console.log(secAve);

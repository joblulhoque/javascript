const array = [1,23,4,5,6,7,1,1,2,23,3,4,5,6,6,7];
const removedDuplicate = array.filter((item,index)=>
array.indexOf(item) === index);
console.log(removedDuplicate);
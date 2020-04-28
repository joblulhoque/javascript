
const array = [1,23,4,5,6,7,1,1,2,23,3,4,5,6,6,7];

const removedDuplicate = array.reduce((unique,item)=>
unique.includes(item)? unique : [...unique,item],[]
);
console.log(removedDuplicate);

const arr = [1,23,4,5,6,7,1,1,2,23,3,4,5,6,6,7];

function removeDup(data){
        let unique = data.reduce((a,b)=>{
              if(a.indexOf(b)<0) a.push(b);
              return a;
        },[]);
        return unique;
}
console.log(removeDup(arr));
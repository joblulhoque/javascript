const numbers = [10,20,30,40,50];


const maxNumber = numbers.reduce((total,num)=>{
        if(total>num){
                return total;
        } else {
                return num;
        }
});
console.log(maxNumber);

const minNumber = numbers.reduce((acc,val)=>{
        if(acc<val){
                return acc;
        }else {
                return val
        }
});
console.log(minNumber);
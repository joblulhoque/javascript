const numbers = [10,20,30,40,50];
const doubled = numbers.reduce((total,num)=>{
         total.push(num*2);
         return total;
},[]);

console.log(doubled);

const euro = [10,12,20,30,40,50,60,70];

const above30 = euro.reduce((total,amount)=>{
        if(amount>30){
                total.push(amount);
        }
        return total;
},[]);
console.log(above30);
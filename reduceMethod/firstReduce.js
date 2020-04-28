const votes = ['yes','yes','yes','no','no','absent'];
const result = votes.reduce((acc,vote)=>{
if(acc[vote]){
acc[vote]++;
}else{
acc[vote] = 1;
}
return acc;
},{});
console.log(result);
const baki = [
        {name:'joblul',amnt:600},
        {name:'hasan',amnt:500},
        {name:'hanif',amnt:400}
];
const total = baki.reduce((acc,item)=>{
return acc + item.amnt;
},0);
console.log(total);
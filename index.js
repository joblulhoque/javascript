const myMarks = 
[
        {name:'bangla',marks:70},
        {name:'english',marks:80},
        {name:'math',marks:75},
        {name:'science',marks:60},
        {name:'biology',marks:85}
];

const existRow = myMarks.find(item=>item.name === 'english');
console.log(existRow);
const updatedRow = {
        ...existRow,marks:existRow.marks +70
};
console.log(updatedRow);
const copiedArray = myMarks.slice();
const desiredRowIndex = myMarks.findIndex(item=>item.name === 'english');
console.log(copiedArray);
console.log(desiredRowIndex);
copiedArray[desiredRowIndex] = updatedRow;
console.log(copiedArray);
 myMarks:[...myMarks,{name:'philo',marks:90}];
console.log(myMarks);
const totalMarks = myMarks.reduce((a,c)=>(a+c.marks),0);
console.log(totalMarks);





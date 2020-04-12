const myMarks = 
[
        {name:'bangla',marks:70},
        {name:'english',marks:80},
        {name:'math',marks:75},
        {name:'science',marks:60},
        {name:'biology',marks:85}
];
const findRow = myMarks.find(item=>item.name == 'bangla');
console.log(findRow);
const updateRow = {
        ...findRow,marks:findRow.marks + 90
}
console.log(updateRow);
const rowIndex = myMarks.findIndex(item=>item.name === 'bangla');
const copiedList = myMarks.slice();
console.log(copiedList);
copiedList[rowIndex] = updateRow;
console.log(copiedList);
const addItem = [...myMarks,{name:'sociology',marks:70}];
console.log(addItem);
copiedList.map(item=>{
        console.log(`subjectName : ${item.name} Marks: ${item.marks}`);
})

const totalMarks = copiedList.reduce((sum,mark)=>(sum +mark.marks),0);
console.log(totalMarks);
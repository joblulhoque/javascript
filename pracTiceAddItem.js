const myMarks = 
[
        {name:'bangla',marks:70},
        {name:'english',marks:80},
        {name:'math',marks:75},
        {name:'science',marks:60},
        {name:'biology',marks:85}
];
const copyArray = [...myMarks];
const copyArrayTwo = myMarks.slice();

const updatedMarks = [...myMarks,{name:'sociology',marks:76}];
console.log(updatedMarks);


const myMarks = 
[
        {name:'bangla',marks:70},
        {name:'english',marks:80},
        {name:'math',marks:75},
        {name:'science',marks:60},
        {name:'biology',marks:85}
];

const printMarks = myMarks.map(mark=>{
        console.log(`subjectName : ${mark.name} Marks : ${mark.marks}`);
});

const totalMarks = myMarks.reduce((total,mark)=>(total+mark.marks),0);
console.log(`totalMarks: ${totalMarks}`);
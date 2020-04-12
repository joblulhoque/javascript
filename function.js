const myMarks = 
[
        {name:'bangla',marks:70},
        {name:'english',marks:80},
        {name:'math',marks:75},
        {name:'science',marks:60},
        {name:'biology',marks:85}
];

function addItem(product){
        const findRow = myMarks.find(item=>item.name === product.name);
        if(findRow){
                const updatedRow = {
                        ...findRow,marks:findRow.marks + product.marks
                }
        const findIndexList = myMarks.findIndex(item=>item.name === product.name);
        const copiedList = myMarks.slice();
        copiedList[findIndexList] = updatedRow;
        return copiedList;
        } else {
                return [...myMarks,product];
        }



}
console.log(addItem({name:'sociology',marks:88}));
function sumFunction(obj){
        return obj.reduce((sum,item)=>{
              return sum + item.marks;
       },0)
      }
      console.log(sumFunction(myMarks));


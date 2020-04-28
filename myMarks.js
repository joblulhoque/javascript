const markSheet = [
        {name:'joblul',marks:90,id:1},
        {name:'hasan',marks:80,id:2},
        {name:'hanif',marks:70,id:3}
];

const addItem = (product) => {
        const findIndex = markSheet.find(item=>item.id ===product.id);

if(findIndex){
        return markSheet.map(item=>item.id===product.id?{...item,marks:item.marks + product.marks}:item);
        

} else {
        return [...markSheet,product];

}
}
console.log(addItem({name:'hanif',marks:70,id:3}));




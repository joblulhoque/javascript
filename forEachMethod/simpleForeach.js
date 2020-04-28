const array1 = ['a', 'b', 'c'];
array1.forEach(ele=> {
        console.log(ele);
});

const items = ['item1', 'item2', 'item3']
const copyItems = []
const newArray =items.forEach(item=>{
 copyItems.push(item);
 return copyItems;
});

const bakirList = [
        {name:'joblul',bokeya:100},
        {name:'hasan',bokeya:200},
        {name:'hanif',bokeya:300},
        {name:'halim',bokeya:500}
];

const printList = bakirList.map(item=>{
        console.log(`CustomerName:${item.name} Bokeya: ${item.bokeya}`);
});
const addCustomer = (customer)=>{
        const existCustomer = bakirList.find(cus=>cus.name === customer.name);
        if(existCustomer){
        const existCustomerIndex = bakirList.findIndex(cus=>cus.name === customer.name);
        const existCustomerBokeyaUpdate = {
                ...existCustomer,bokeya:existCustomer.bokeya + customer.bokeya
        }
        const copyList = bakirList.slice();
        copyList[existCustomerIndex] = existCustomerBokeyaUpdate
        return copyList;
        } else {
                return [...bakirList,customer];

        }
        



}
console.log(addCustomer({name:'samsul',bokeya:250}));
console.log(addCustomer({name:'joblul',bokeya:150}));
console.log(addCustomer({name:'joblul',bokeya:150}));
const bakirListi = [
        {name:'joblul',baki:90,id:1},
        {name:'hasan',baki:80,id:2},
        {name:'hanif',baki:70,id:3}
];
function addCustomer(customer){
        const customerIndex = bakirListi.findIndex(cus=>cus.id === customer.id);
        if(customerIndex >=0 ){
        const currentCustomers = bakirListi.slice();
        const existingCustomer = currentCustomers[customerIndex];
        const updatedBaki = {
                ...existingCustomer,baki:existingCustomer.baki + customer.baki
        };
        currentCustomers[customerIndex] = updatedBaki;
       return currentCustomers;
        } else {
                return [...bakirListi,customer];
        }

}
console.log(addCustomer({name:'hanif',baki:70,id:3}));
console.log(addCustomer({name:'hanif',baki:70,id:3}));


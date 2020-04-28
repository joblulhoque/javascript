const myMarks = 
[
        {name:'bangla',marks:70,id:1},
        {name:'english',marks:80,id:2},
        {name:'math',marks:75,id:3},
        {name:'science',marks:60,id:4},
        {name:'biology',marks:85,id:5}
];
const findRow = myMarks.map(item=>item.id===1);
if(findRow){
        const updatedRow = myMarks.map(item=>item.id===1 ?
                { ...item,marks:item.marks + 33}
                :item);
                console.log(updatedRow);
}
const updatedRow = myMarks.map(item=>item.id===3?{...item,marks:item.marks +80}:item);
const addedMarks = [...myMarks,{name:'sociology',marks:70,id:5}];
console.log(addedMarks);
const addItemToCart= (cartItems,cartItemToAdd)=>{
        const existingItem = cartItems.find(cartItem=>cartItem.id === cartItemToAdd.id);
        if(existingItem){
                return cartItems.map(cartItem=>cartItem.id === cartItemToAdd.id?
                        {...cartItem,quantity:cartItem.quantity +1}:cartItem);
        }
        return [...cartItems,{...cartItemToAdd,quantity:1}]
}
const addItemToCart = (cartItems,cartItemToAdd) => {
        const existingItem = cartItems.find(cartItem=>cartItem.id === cartItemToAdd.id);
        if(existingItem){
                return cartItems.map(cartItem=>cartItem.id === cartItemToAdd.id?
                        {...cartItem,quantity:cartItem.quantity + 1}
                        :cartItem);
        }
        return [...cartItems,{...cartItemToAdd,quantity:1}]
}

const addItemToCart = (cartItems,cartItemToAdd) => {
        const existingItem = cartItems.find(cartItem=>cartItem.id === cartItemToAdd.id);
        if(existingItem){
                return cartItems.map(cartItem=>cartItem.id===cartItemToAdd.id?
                        {...cartItem,quantity:cartItem.quantity + 1}
                        :cartItem);
        }
        return [...cartItems,{...cartItemToAdd,quantity:1}]
}

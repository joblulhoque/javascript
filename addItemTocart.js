const cart = [{ name: 'pant', id: 1, quantity: 2 }];
const addItemToCart = (cartItems,cartItemToadd) => {
        const findRow = cartItems.find(item=>item.id === cartItemToadd.id);
        if(findRow){
               return  cartItems.map(item=>item.id === cartItemToadd.id?
                {...item,quantity:item.quantity+1}
                :item)
        }
        return [...cartItems,{...cartItemToadd,quantity:1}]

}
console.log(addItemToCart(cart,{name:'pant',id:1}));

const addItemToCart = (cartItems,cartItemToAdd)=>{
        const existingCartItem = find(cartItem=>cartItem.id===cartItemToAdd.id);
        if(existingCartItem){
                return cartItems.map(cartItem=>cartItem.id === cartItemToAdd.id?
                {...cartItem,quantity:cartItem.quantity +1}
                :cartItem
                );

        }
        return [...cartItems,{...addItemToCart,quantity:1}];
}
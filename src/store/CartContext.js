import React, { createContext, useContext, useState } from "react";
const CartContext = createContext();
export const CartProvider =({children})=>{
    const [cartItems,setCartItems] = useState([]);
    const addToCart=(meal)=>{
        setCartItems((prevItems) => {
            const updatedItems = [...prevItems, meal];
            console.log("Cart items after adding:", updatedItems);
            return updatedItems;
        });
        
    };
    const removeFromCart = (mealId) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== mealId));
    };
    return(
        <CartContext.Provider value={{cartItems,addToCart,removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
};
export const useCart =()=>{
    return useContext(CartContext);
}
import React, { createContext, useContext,useReducer,useEffect } from "react";
import cartReducer from "./CartReducer";
const CartContext = createContext();

const initialState = {
    items: []
};

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState); 

    const addToCart = (meal) => {
        dispatch({ type: 'ADD_ITEM', payload: meal });
    };
    useEffect(() => {
        console.log("card items", state.items); 
    }, [state.items]);

    return (
        <CartContext.Provider value={{ cartItems: state.items, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};

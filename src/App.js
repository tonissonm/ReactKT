import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartProvider } from "./store/CartContext";
import { useReducer } from "react";

const App = () => {
    return (
        <CartProvider>
            <Header/>
            <Meals />
        </CartProvider>
    );
};

export default App;
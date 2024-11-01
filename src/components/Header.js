import logo from '../assets/logo.jpg'
import { useCart } from "../store/CartContext";
const Header = () => {
    const { cartItems } = useCart();
    return (
        <header id="main-header">
            <div id="title">
                <img src={logo}/>
                <h1>React Food Order App</h1>
            </div>
            <nav>
            <button className='text-button' onClick={()=>console.log({cartItems})}>Cart ({cartItems.length})</button>
            </nav>
        </header>
    )
}

export default Header
import React, { useState } from 'react';
import logo from '../assets/logo.jpg';
import Button from './UI/Button';
import { useCart } from "../store/CartContext";
import Modal from './UI/Modal'; 

const Header = () => {
    const { cartItems } = useCart();
    const [modalOpen, setModalOpen] = useState(false);
    
    const handleButtonClick = () => {
        setModalOpen(true);
    };
    
    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <header id="main-header">
            <div id="title">
                <img src={logo} alt="Logo" />
                <h1>React Food Order App</h1>
            </div>
            <nav>
                <Button textOnly={true} onClick={handleButtonClick}>
                    Cart ({totalQuantity})
                </Button>
                <Modal isOpen={modalOpen} onClose={handleCloseModal}>
                    
                </Modal>
            </nav>
        </header>
    );
}

export default Header;
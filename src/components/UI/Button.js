import React from 'react';
const Button = (props) => {
    const buttonClass = textOnly ? 'text-button' : 'button';
    return (
        <button className={buttonClass} onClick={onClick}>
            {children}
        </button>
    );
}
export default Button
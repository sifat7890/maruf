import React from 'react';

const Cart = ({gadget}) => {
    const{product_title,product_id,price} = gadget;
    console.log(gadget);
    
    return (
        <div>
            {product_title}
        </div>
    );
};

export default Cart;
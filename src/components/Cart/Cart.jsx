import React from 'react';
import TShirt from '../TShirt/TShirt';
import './Cart.css'

const Cart = ({cart, handleRemoveFromCart}) => {
    let message;
    if(cart.length === 0){
        message = <p>Please add some product</p>
    }
    else{
        message = <div>
            <h3>Borolox</h3>
            <p><small>Thanks for giving your money</small></p>
        </div>
    }
    return (
        <div>
            <h2 className={cart.length === 1 ? 'blue' : 'red'}>Order Summary: {cart.length}</h2>
            <p className={`bold bordred ${cart.length === 3 ? 'yellow' : 'purple'}`}>Something</p>
            {/* 1 */}
            {cart.length > 2 ? <span className='purple'>Aro Kino</span> : <span>Fokira</span>}
            {/* 2 */}
            {message}
            {/* 3 */}
            {
                cart.length === 2 && <p>Double Bonaza!!!</p>
            }
            {/* 4 */}
            {
                cart.length === 3 || <h3>Thinta to holo na</h3>
            }
            {
                cart.map(tshirt =><p
                    key={tshirt._id}
                    >{tshirt.name} <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button></p> )
            }
        </div>
    );
};

export default Cart;

/** CONDITIONAL RENDERING
 * 1. use if else to set a variable that will contain an element, componenets
 * 2. ternary: condition ? 'for true' : 'false'
 * 3. Logical &&: (if the condition is true then the next thing will be displayed)
 * 4. Logical || (if the condition is false then the next thing will be displayed)
 */
/**
 * 1. use ternary
 * 2. ternary inside template string
 */
import React from 'react';

const Cart = ({ updateOrder, removeFromCart, lineItems, cart, products })=> {
  return (
    <div>
      <h2>Cart</h2>
      <div >
      <ul>
        {
          lineItems.filter((lineItem) => {return lineItem.order_id === cart.id}).map( lineItem => {
            const product = products.find(product => product.id === lineItem.product_id) || {};
            return (
              
              <li className="cartBox" key={ lineItem.id }>
                { product.name }
                ({ lineItem.quantity })
                <button onClick={ ()=> removeFromCart(lineItem)}>Remove From Cart</button>
                {
        lineItems.filter((lineItem) => {return lineItem.order_id === cart.id }).length ? <button classname="cartBtn" onClick={()=> {
          updateOrder({...cart, is_cart: false });
        }}>Create Order</button>: null
      }
              </li>
              
            );
          })
        }
      </ul>
     
      </div>
    </div>
  );
};

export default Cart;

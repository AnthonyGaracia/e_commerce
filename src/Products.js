import React from 'react';


const Products = ({ products, cartItems, createLineItem, updateLineItem })=> {
  return (
    <div>
      <h2>Products</h2>
      <p>Blank Loop Tapes and Blank Tapes Availiable </p>
      <ul>
        {
          products.map( product => {
            
            const cartItem = cartItems.find(lineItem => lineItem.product_id === product.id);
            return (
              <div className="prodBox">
                <img className= "prodPix"src={product.img}/> 
              <li key={ product.id }>
              { product.name } ${product.price}.00 {product.description}
                
                 
              </li>
              {
                  cartItem ? <button onClick={ ()=> updateLineItem(cartItem)}>Add Another</button>: <button onClick={ ()=> createLineItem(product)}>Add</button>
                }
              </div>
            );
          })
        }
      </ul>
    </div>
  );
};

export default Products;

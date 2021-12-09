import React, { useState } from 'react';

/*
const Products = ({name,price}) =>{
    
  return(
      <div>
          <p>Nombre: {name}</p>
          <p>Precio: {price}</p>
          
      </div>
  )
}
export default Products;*/

export default function ItemCount({stock}) {

    const [itemCount, setItemCount] = useState(0);

    const updateItem = () =>{
      if (itemCount <stock){

        setItemCount(itemCount + 1);
    }
  }
    const removeItem = () => {
        if (itemCount >=1){
        setItemCount(itemCount - 1);
        }

    }

  return (
    <div>
      <h2>Gorra</h2>
      <h1>{itemCount}</h1>
      <button onClick={updateItem}>+</button>
      <button onClick={removeItem}>-</button>
      <p>Stock: {stock}</p>
      <button >Agregar al carrito</button>
      
     


    </div>
  );
}
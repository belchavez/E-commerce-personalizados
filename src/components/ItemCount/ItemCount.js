import React, { useState } from 'react';

export default function ItemCount() {

    const [click, setClick] = useState(0);

    const updateItem = () =>{
        setClick(click + 1);
    }
    const removeItem = () => {
        if (click >=1){
        setClick(click - 1);
        }

    }

  return (
    <div>
      <h1>Productos {click} </h1>

      <button onClick={updateItem}>+</button>
      <button onClick={removeItem}>-</button>
      <button >Agregar al carrito</button>


    </div>
  );
}
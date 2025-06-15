import React, { useState } from 'react'

const Shopping = () => {
    const [items, setItems] = useState([]);
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");

      const handleSubmit = (e) => {
          e.preventDefault();

          if(!name || !quantity) return;

          const newItem = {
             name,
             quantity: parseInt(quantity)
          }

          setItems((previousItems) => [...previousItems, newItem]);
          setName("");
          setQuantity("");
      }

  return (
    <div>
        <h1>Shopping 🛒</h1>
        <form onSubmit={handleSubmit}>
            <label>
                <input 
                     type="text" 
                     name='name' 
                     value={name}
                     placeholder='Enter item' 
                     onChange={(e) => setName(e.target.value)}
                />

                <input 
                     type="number" 
                     name='quantity' 
                     value={quantity} 
                     placeholder='Enter quantity'
                     onChange={(e) => setQuantity(e.target.value)}
                />

                <button type='submit'>add item</button>
            </label>
        </form>
        <div>
            <h1>List</h1>
            {items.map((item, index) => (
                <ul key={index}>
                    <li>item: {item.name} quantity: {item.quantity}</li>
                </ul>
            ))}
        </div>
    </div>
  )
}

export default Shopping
import { useState } from 'react';

const useCart = () => {
  const [itemById, setItemById] = useState({});
  const [itemIds, setItemIds] = useState([]);

  const addToCart = item => {
    setItemById(prev => {
      const existing = prev[item.id];
      const quantity = existing
        ? existing.quantity + item.quantity
        : item.quantity;
      return {
        ...prev,
        [item.id]: {
          ...item,
          quantity,
        },
      };
    });

    setItemIds(prev => (prev.includes(item.id) ? prev : [...prev, item.id]));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1 || quantity > 99) return
    setItemById(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        quantity
      },
    }));
  };

  const removeFromCart = id => {
    setItemById(prev => {
      const newCart = { ...prev };
      delete newCart[id]
      return newCart
    })

    setItemIds(prev => prev.filter( itemId => itemId !== id))
  }

  const getItem = () => itemIds.map(id => itemById[id]);

  const getTotal = () => getItem().reduce((prev, curr) => prev + curr.price * curr.quantity, 0)

  return { itemById, itemIds, addToCart, updateQuantity, removeFromCart, getItem, getTotal };
};

export default useCart;

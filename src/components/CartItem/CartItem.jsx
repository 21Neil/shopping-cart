import React from 'react'
import QuantityCounter from '../QuantityCounter/QuantityCounter'
import { Trash2 } from 'lucide-react'
import styles from './CartItem.module.css';

const CartItem = ({ item, updateQuantity, removeFromCart }) => {
  const counterUpdateQuantity = quantity => {
    updateQuantity(item.id, quantity)
  };

  return (
    <div className={styles.cartItem__container}>
      <div className={styles.cartItem__imgContainer}>
        <img src={item.image} alt="" />
      </div>
      <h3 className={styles.cartItem__title}>{item.title}</h3>
      <p className={styles.cartItem__price}>$ {item.price}</p>
      <QuantityCounter value={item.quantity} counterUpdateQuantity={counterUpdateQuantity} />
      <button className={styles.cartItem__deleteBtn} onClick={() => removeFromCart(item.id)} >
        <Trash2 size={20} strokeWidth={1.5} />
      </button>
    </div>
  )
}

export default CartItem
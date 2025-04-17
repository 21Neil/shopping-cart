import React from 'react'
import QuantityCounter from '../QuantityCounter/QuantityCounter'
import { Trash2 } from 'lucide-react'
import styles from './CartItem.module.css';

const CartItem = () => {
  return (
    <div className={styles.cartItem__container}>
      <div className={styles.cartItem__imgContainer}>
        <img src="https://cdn.pixabay.com/photo/2018/03/08/18/13/chair-3209341_960_720.jpg" alt="" />
      </div>
      <p>Chair</p>
      <p>$ 100</p>
      <QuantityCounter />
      <button className={styles.cartItem__deleteBtn}>
        <Trash2 />
      </button>
    </div>
  )
}

export default CartItem
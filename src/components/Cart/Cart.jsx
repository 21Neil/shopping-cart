import React from 'react'
import CartItem from '../CartItem/CartItem'
import styles from './Cart.module.css'
import Button from '../Button/Button'

const Cart = () => {
  return (
    <div className={styles.cart__container}>
      <div>
        <CartItem />
      </div>
      <div className={styles.cart__footer}>
        <p>Total: <span className={styles.cart__amount}>$100</span></p>
        <Button>Checkout</Button>
      </div>
    </div>
  )
}

export default Cart
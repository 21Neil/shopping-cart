import React from 'react';
import CartItem from '../CartItem/CartItem';
import styles from './Cart.module.css';
import Button from '../Button/Button';

const Cart = ({ updateQuantity, removeFromCart, getItem, getTotal }) => {
  const cartItems = getItem();
  const total = getTotal();

  return (
    <div className={styles.cart__container}>
      <div>
        {cartItems && cartItems.length > 0 ? (
          cartItems.map(item => <CartItem key={item.id} {...{ item, updateQuantity, removeFromCart }} />)
        ) : (
          <h2>Nothing...</h2>
        )}
      </div>
      <div className={styles.cart__footer}>
        <p>
          Total: <span className={styles.cart__amount}>${total}</span>
        </p>
        <Button>Checkout</Button>
      </div>
    </div>
  );
};

export default Cart;

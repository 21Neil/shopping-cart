import { useEffect, useRef, useState } from 'react';
import styles from './Card.module.css';
import Button from '../Button/Button';
import useQuantityCounter from '../../hooks/useQuantityCounter/useQuantityCounter';

const AddToCart = ({
  showAddToCart,
  handleClose,
  setIsAnimating,
  addToCart,
  item,
}) => {
  const { quantity, quantityChange, minusClick, plusClick } =
    useQuantityCounter(1);
  const addToCartRef = useRef(null);

  const handleAdd = e => {
    if (isNaN(Number(quantity))) return;
    addToCart({ ...item, quantity });
    handleClose(e);
  };

  useEffect(() => {
    const addToCartCurrent = addToCartRef.current;

    const setAnimation = () => setIsAnimating(false);

    addToCartCurrent.addEventListener('animationcancel', setAnimation);
    addToCartCurrent.addEventListener('animationend', setAnimation);

    return () => {
      addToCartCurrent.removeEventListener('animationcancel', setAnimation);
      addToCartCurrent.removeEventListener('animationend', setAnimation);
    };
  }, [setIsAnimating]);

  return (
    <div
      ref={addToCartRef}
      className={`${styles.addToCart} ${
        showAddToCart ? styles.fadeIn : `${styles.fadeOut} ${styles.visible}`
      }`}
      data-testid='add-to-cart'
    >
      <button
        aria-label='close-btn'
        className={styles.addToCart__closeBtn}
        onClick={handleClose}
      />
      <div className={styles.card__quantityContainer}>
        <button onClick={minusClick}>-</button>
        <input
          type='number'
          aria-label='quantity'
          className={styles.quantityInput}
          max={99}
          min={1}
          value={quantity}
          onChange={quantityChange}
        />
        <button onClick={plusClick}>+</button>
      </div>
      <Button className={styles.addToCart__addToCartBtn} onClick={handleAdd}>
        Add to cart
      </Button>
    </div>
  );
};

const Card = ({ item, addToCart }) => {
  const [showAddToCart, setShowAddToCart] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleShow = () => {
    setShowAddToCart(true);
    setIsAnimating(true);
  };

  const handleClose = e => {
    e.stopPropagation();
    setIsAnimating(true);
    setShowAddToCart(false);
  };

  return (
    <div
      className={
        styles.card +
        (showAddToCart || isAnimating ? '' : ` ${styles.cardPointer}`)
      }
      onClick={handleShow}
      data-testid='card'
    >
      <div className={styles.card__imgContainer}>
        <img src={item.image} alt={item.title} />
        {(showAddToCart || isAnimating) && (
          <AddToCart
            {...{ showAddToCart, handleClose, setIsAnimating, addToCart, item }}
          />
        )}
      </div>
      <div className={styles.card__content}>
        <h3 className={styles.card__contentTittle}>
          {item.title.length > 40
            ? `${item.title.slice(0, 40)}...`
            : item.title}
        </h3>
        <p className={styles.card__contentPrice}>${item.price}</p>
      </div>
    </div>
  );
};

export default Card;

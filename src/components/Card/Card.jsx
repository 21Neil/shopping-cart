import { useEffect, useRef, useState } from 'react';
import styles from './Card.module.css';
import { Minus, Plus, X } from 'lucide-react';
import Button from '../Button/Button';

const AddToCart = ({
  value,
  setValue,
  showAddToCart,
  handleClose,
  setIsAnimating,
}) => {
  const addToCartRef = useRef(null);

  const quantityChange = e => {
    if (e.target.value.length > 3) return;
    setValue(e.target.value);
  };

  const minusClick = () => {
    if (+value === 1) return;
    setValue(+value - 1);
  };

  const plusClick = () => {
    if (+value === 999) return;
    setValue(+value + 1);
  };

  const handleAdd = e => {
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
      <button aria-label='close-btn' className={styles.addToCart__closeBtn} onClick={handleClose}>
        <X color='white' size={36} strokeWidth={1} />
      </button>
      <div className={styles.card__quantityContainer}>
        <button onClick={minusClick} aria-label='minus-btn'>
          <Minus color='white' size={48} strokeWidth={1} />
        </button>
        <input
          type='number'
          aria-label='quantity'
          className={styles.quantityInput}
          max={99}
          min={1}
          value={value}
          onChange={quantityChange}
        />
        <button onClick={plusClick} aria-label='plus-btn'>
          <Plus color='white' size={48} strokeWidth={1} />
        </button>
      </div>
      <Button onClick={handleAdd}>Add to cart</Button>
    </div>
  );
};

const Card = () => {
  const [showAddToCart, setShowAddToCart] = useState(false);
  const [value, setValue] = useState(1);
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
    <div className={styles.card} onClick={handleShow} data-testid='card'>
      <div className={styles.card__imgContainer}>
        <img
          src='https://cdn.pixabay.com/photo/2018/03/08/18/13/chair-3209341_960_720.jpg'
          alt=''
        />
        {(showAddToCart || isAnimating) && (
          <AddToCart
            {...{ value, setValue, showAddToCart, handleClose, setIsAnimating }}
          />
        )}
      </div>
      <div className={styles.card__content}>
        <h3 className={styles.card__contentTittle}>test</h3>
        <p className={styles.card__contentPrice}>$ 100</p>
      </div>
    </div>
  );
};

export default Card;

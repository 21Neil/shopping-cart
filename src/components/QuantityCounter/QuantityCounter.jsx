import React from 'react';
import styles from './QuantityCounter.module.css';
import useQuantityCounter from '../../hooks/useQuantityCounter/useQuantityCounter';

const QuantityCounter = ({ value, counterUpdateQuantity }) => {
  const { quantity, quantityChange, minusClick, plusClick } =
    useQuantityCounter(value);

  const handleMinus = () => {
    minusClick();
    counterUpdateQuantity(value - 1);
  }

  const handlePlus = () =>{ 
    plusClick();
    counterUpdateQuantity(value + 1)
  }

  const handleInput = (e) => {
    quantityChange(e);
    counterUpdateQuantity(+e.target.value)
  }

  return (
    <div className={styles.quantityCounter__container}>
      <button className={styles.quantityCounter__btn} onClick={handleMinus}>
        -
      </button>
      <input
        className={styles.quantityCounter__input}
        type='number'
        value={quantity}
        onChange={handleInput}
      />
      <button className={styles.quantityCounter__btn} onClick={handlePlus}>
        +
      </button>
    </div>
  );
};

export default QuantityCounter;

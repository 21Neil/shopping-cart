import React from 'react';
import styles from './QuantityCounter.module.css';
import useQuantityCounter from '../../hooks/useQuantityCounter/useQuantityCounter';

const QuantityCounter = ({ value }) => {
  const { quantity, quantityChange, minusClick, plusClick } =
    useQuantityCounter(value);
  return (
    <div className={styles.quantityCounter__container}>
      <button className={styles.quantityCounter__btn} onClick={minusClick}>
        -
      </button>
      <input
        className={styles.quantityCounter__input}
        type='number'
        value={quantity}
        onChange={quantityChange}
      />
      <button className={styles.quantityCounter__btn} onClick={plusClick}>
        +
      </button>
    </div>
  );
};

export default QuantityCounter;
